(function () {
  const STORAGE_KEY = "FBRH_WORKBENCH_V2_STATE";
  const SOURCE_GITHUB_REPO = { owner: "longtr99", repo: "research-workflow" };

  if (window.pdfjsLib && window.pdfjsLib.GlobalWorkerOptions) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  }

  const PRESETS = {
    research: [
      {
        id: "res-esg-bank-risk",
        title: "1. ESG, Rủi ro ngân hàng & Chi phí vốn",
        topic: "Tác động của điểm số ESG đến rủi ro tín dụng và chi phí vốn của ngân hàng thương mại",
        rq: "Điểm số ESG tác động như thế nào đến rủi ro vỡ nợ/rủi ro tín dụng và chi phí vốn của NHTM, và vai trò điều tiết của quản trị công ty ra sao?",
        context: "Dữ liệu bảng ngân hàng niêm yết/khu vực giai đoạn 2015–2025; kiểm định tính nội sinh và cơ chế truyền dẫn.",
        variables: "Y: NPL / Z-score / Cost of Debt | X: ESG Score | Mod/Med: Board Independence, Institutional Ownership",
        method: "Panel Fixed/Random Effects, System GMM, PSM / Difference-in-Differences",
        query: '("ESG" OR "environmental, social and governance") AND ("bank risk" OR "credit risk" OR "cost of debt")'
      },
      {
        id: "res-fintech-nim",
        title: "2. Fintech, Cạnh tranh số & Biên lãi ròng (NIM)",
        topic: "Ảnh hưởng của tăng trưởng Fintech và ngân hàng số đến biên lãi ròng và sức mạnh thị trường của NHTM",
        rq: "Sự mở rộng của Fintech làm thay đổi NIM và nguồn thu ngoài lãi của NHTM ra sao? Quy mô và mức độ chuyển đổi số có tạo khác biệt không?",
        context: "Dữ liệu ngân hàng thương mại kết hợp chỉ số mức độ phát triển Fintech / thanh toán số.",
        variables: "Y: NIM, Non-interest Income Ratio | X: Fintech Index / Digital Adoption | Controls: Size, CAR, Loan-to-Deposit, GDP, Inflation",
        method: "Two-step System GMM, Threshold Regression hoặc Quantile Panel",
        query: '("fintech" OR "digital banking") AND ("net interest margin" OR "bank profitability" OR "competition")'
      },
      {
        id: "res-green-finance-inv",
        title: "3. Tài chính xanh, Ràng buộc tài chính & Đầu tư doanh nghiệp",
        topic: "Tác động của tín dụng xanh và trái phiếu xanh đến đầu tư xanh và hiệu quả tài chính doanh nghiệp",
        rq: "Tiếp cận tài chính xanh giúp giảm ràng buộc tài chính và thúc đẩy đầu tư xanh của doanh nghiệp như thế nào?",
        context: "Doanh nghiệp niêm yết phân theo mức độ phát thải/nhạy cảm môi trường và chính sách tín dụng xanh.",
        variables: "Y: Green Investment, Tobin's Q, ROA | X: Green Finance Exposure / Green Bond Issuance | Controls: Leverage, Cash Flow, Tangibility, Firm Age",
        method: "DID, Triple-DID, Instrumental Variables (IV-2SLS)",
        query: '("green finance" OR "green credit" OR "green bond") AND ("corporate investment" OR "financial constraints" OR "firm performance")'
      },
      {
        id: "res-monetary-liquidity",
        title: "4. Chính sách tiền tệ, Thanh khoản & Rủi ro hệ thống",
        topic: "Cơ chế truyền dẫn chính sách tiền tệ qua kênh thanh khoản và rủi ro hệ thống của hệ thống ngân hàng",
        rq: "Thay đổi lập trường chính sách tiền tệ tác động đến thanh khoản ngân hàng và mức độ đóng góp rủi ro hệ thống ra sao?",
        context: "Dữ liệu vĩ mô – thị trường liên ngân hàng kết hợp dữ liệu báo cáo định kỳ của các ngân hàng.",
        variables: "Y: Liquidity Ratio, SRISK / Delta CoVaR | X: Policy Rate / Credit Growth Target | Controls: Capital Buffer, NPL, Interbank Ratio",
        method: "SVAR / Local Projections (Jordà) kết hợp Panel Econometrics",
        query: '("monetary policy" OR "interest rate") AND ("bank liquidity" OR "systemic risk" OR "CoVaR")'
      },
      {
        id: "res-capital-structure-uncertainty",
        title: "5. Bất định kinh tế vĩ mô, Cấu trúc vốn & Tốc độ điều chỉnh đòn bẩy",
        topic: "Bất định chính sách kinh tế và tốc độ điều chỉnh cấu trúc vốn mục tiêu của doanh nghiệp",
        rq: "Bất định vĩ mô làm chậm hay đẩy nhanh tốc độ điều chỉnh đòn bẩy tài chính về mức mục tiêu của doanh nghiệp?",
        context: "Dữ liệu tài chính doanh nghiệp niêm yết qua các chu kỳ biến động lãi suất, tỷ giá và bất định vĩ mô.",
        variables: "Y: Speed of Leverage Adjustment | X: Economic Policy Uncertainty (EPU) / Macro Volatility | Controls: Profitability, Tangibility, MTB, Size",
        method: "Partial Adjustment Model ước lượng bằng Blundell-Bond System GMM",
        query: '("policy uncertainty" OR "macroeconomic uncertainty") AND ("capital structure" OR "leverage adjustment")'
      },
      {
        id: "res-mna-valuation-governance",
        title: "6. M&A, Quản trị công ty & Hiệu quả sau sáp nhập",
        topic: "Vai trò của quản trị công ty và tương đồng chiến lược đến giá trị tạo ra trong các thương vụ M&A",
        rq: "Yếu tố quản trị công ty và cấu trúc thanh toán ảnh hưởng thế nào đến lợi suất bất thường tích lũy (CAR) và hiệu quả dài hạn sau M&A?",
        context: "Các thương vụ M&A trong lĩnh vực tài chính – ngân hàng hoặc doanh nghiệp niêm yết.",
        variables: "Y: CAR [-3,+3] / [-5,+5], BHAR, post-M&A ROA | X: Governance Index, Deal Payment Method, Relatedness | Controls: Relative Size, Leverage, Cash",
        method: "Event Study (Market Model) kết hợp OLS/Heckman selection và Propensity Score Matching",
        query: '("mergers and acquisitions" OR "M&A") AND ("corporate governance" OR "abnormal returns" OR "post-merger performance")'
      }
    ],
    applied: [
      {
        id: "app-credit-scoring",
        title: "1. Mô hình Chấm điểm tín dụng & Cảnh báo sớm nợ xấu",
        topic: "Xây dựng khung chấm điểm tín dụng và cảnh báo sớm khách hàng vay/doanh nghiệp có nguy cơ quá hạn",
        rq: "Làm sao phân tầng rủi ro khách hàng và thiết lập ngưỡng cảnh báo sớm trước khi phát sinh nợ nhóm 3+?",
        context: "Hồ sơ khách hàng, lịch sử thanh toán, tỷ lệ đòn bẩy, dòng tiền hoạt động và biến động doanh thu/chi tiêu.",
        variables: "Target: Default / DPD >= 90 | Features: DTI, DSCR, Utilization, Payment History, Cash Flow Volatility",
        method: "Logistic Regression / Scorecard / WoE-IV, ROC-AUC, KS, Confusion Matrix & Stress Test",
        query: '("credit scoring" OR "early warning system" OR "probability of default") AND ("banking" OR "loan default" OR "risk management")'
      },
      {
        id: "app-financial-health-dashboard",
        title: "2. Khung Đánh giá sức khỏe tài chính & Khả năng thanh toán doanh nghiệp",
        topic: "Thiết kế bộ chỉ số và quy trình thẩm định sức khỏe tài chính doanh nghiệp phục vụ cấp tín dụng / đầu tư",
        rq: "Hệ thống chỉ tiêu thanh khoản, đòn bẩy, dòng tiền và hiệu quả hoạt động nào phản ánh sớm nhất áp lực mất khả năng chi trả?",
        context: "Báo cáo tài chính 3–5 năm của nhóm doanh nghiệp mục tiêu hoặc danh mục khách hàng doanh nghiệp.",
        variables: "Metrics: Current/Quick Ratio, OCF/Debt, Interest Coverage, CCC, Altman Z/Z''-score, Net Debt/EBITDA",
        method: "Phân tích tỷ số tài chính, chấm điểm đa tiêu chí (Weighted Scorecard) và kịch bản nhạy cảm",
        query: '("financial distress" OR "corporate solvency" OR "credit analysis") AND ("cash flow" OR "working capital" OR "z-score")'
      },
      {
        id: "app-portfolio-risk-budgeting",
        title: "3. Phân bổ danh mục đầu tư & Quản trị rủi ro thị trường / thanh khoản",
        topic: "Xây dựng quy trình phân bổ tỷ trọng danh mục và kiểm soát rủi ro biến động/thanh khoản cho nhà đầu tư hoặc ngân hàng",
        rq: "Làm sao cân bằng lợi suất kỳ vọng, biến động danh mục và mức sụt giảm tối đa (Max Drawdown) theo khẩu vị rủi ro?",
        context: "Chuỗi giá/lợi suất tài sản, trái phiếu/tiền gửi/cổ phiếu và các kịch bản cú sốc lãi suất hoặc biến động thị trường.",
        variables: "Metrics: Expected Return, Volatility, Sharpe/Sortino, VaR/CVaR, Max Drawdown, Liquidity Coverage",
        method: "Mean-Variance / Risk Parity, Historical & Monte Carlo Simulation, Scenario Stress Testing",
        query: '("portfolio optimization" OR "risk budgeting" OR "value at risk") AND ("drawdown" OR "liquidity risk" OR "stress testing")'
      },
      {
        id: "app-working-capital-treasury",
        title: "4. Tối ưu vốn lưu động & Quản trị dòng tiền (Treasury)",
        topic: "Quy trình rút ngắn chu kỳ chuyển đổi tiền mặt (CCC) và tối ưu quản trị tiền mặt – nợ ngắn hạn tại doanh nghiệp",
        rq: "Doanh nghiệp có thể giải phóng bao nhiêu dòng tiền hoạt động thông qua tối ưu khoản phải thu, tồn kho và phải trả?",
        context: "Dữ liệu công nợ khách hàng, vòng quay hàng tồn kho, kỳ hạn thanh toán nhà cung cấp và chi phí vốn ngắn hạn.",
        variables: "Metrics: DSO, DIO, DPO, Cash Conversion Cycle (CCC), Free Cash Flow, Short-term Borrowing Cost",
        method: "Phân tích phân nhóm công nợ/tồn kho (ABC/Aging), mô phỏng dòng tiền 12 tháng và tính toán tiết kiệm chi phí vốn",
        query: '("working capital management" OR "cash conversion cycle" OR "corporate treasury") AND ("liquidity" OR "cash flow")'
      },
      {
        id: "app-valuation-dcf-multiples",
        title: "5. Mô hình Định giá doanh nghiệp & Thẩm định phương án đầu tư / M&A",
        topic: "Xây dựng mô hình định giá DCF kết hợp bội số thị trường và phân tích độ nhạy cho thương vụ đầu tư hoặc M&A",
        rq: "Giá trị hợp lý của doanh nghiệp/dự án nhạy cảm nhất với các giả định tăng trưởng, biên lợi nhuận và chi phí vốn (WACC) nào?",
        context: "Báo cáo tài chính lịch sử, giả định kế hoạch kinh doanh 5 năm, lãi suất phi rủi ro, phần bù rủi ro và nhóm doanh nghiệp so sánh.",
        variables: "Inputs/Outputs: FCFF/FCFE, WACC, Terminal Growth, EV/EBITDA, P/E, P/B, Sensitivity & Scenario Range",
        method: "Discounted Cash Flow (DCF), Comparable Multiples, Sensitivity Matrix & Monte Carlo valuation range",
        query: '("business valuation" OR "DCF" OR "WACC") AND ("mergers and acquisitions" OR "sensitivity analysis" OR "valuation multiples")'
      },
      {
        id: "app-aml-fraud-monitoring",
        title: "6. Khung Giám sát giao dịch bất thường & Kiểm soát rủi ro vận hành",
        topic: "Thiết kế bộ quy tắc và chỉ báo giám sát giao dịch bất thường / rủi ro vận hành trong ngân hàng và thanh toán số",
        rq: "Những dấu hiệu hành vi và ngưỡng cảnh báo nào giúp phát hiện sớm giao dịch bất thường mà vẫn hạn chế báo động giả?",
        context: "Nhật ký giao dịch, tần suất, giá trị, khung giờ, kênh giao dịch và lịch sử hành vi tài khoản.",
        variables: "Indicators: Velocity Spike, Amount Deviation (z-score), Off-hours/Channel Shift, Alert Precision & False Positive Rate",
        method: "Rule-based scoring kết hợp anomaly threshold tuning và đánh giá chi phí/hiệu quả vận hành (Precision/Recall)",
        query: '("transaction monitoring" OR "fraud detection" OR "operational risk") AND ("banking" OR "anomaly" OR "risk controls")'
      }
    ],
    qtkd30: [
      "Tác động của năng lực AI (AI Competence) đến khả năng có việc làm của sinh viên Việt Nam.",
      "Các yếu tố ảnh hưởng đến mức độ sẵn sàng ứng dụng AI trong doanh nghiệp nhỏ và vừa tại Việt Nam.",
      "Ảnh hưởng của AI tạo sinh (Generative AI) đến năng suất làm việc của nhân viên văn phòng.",
      "Vai trò của AI trong nâng cao năng lực đổi mới sáng tạo của doanh nghiệp.",
      "Tác động của AI đến ý định khởi nghiệp của sinh viên Việt Nam.",
      "Ảnh hưởng của AI Anxiety đến quyết định lựa chọn nghề nghiệp của sinh viên.",
      "Các yếu tố ảnh hưởng đến niềm tin của người tiêu dùng đối với AI trong hoạt động kinh doanh.",
      "Tác động của AI Marketing đến trải nghiệm và lòng trung thành của khách hàng.",
      "Vai trò của Agentic AI trong chuyển đổi mô hình kinh doanh của doanh nghiệp.",
      "Các yếu tố ảnh hưởng đến mức độ chấp nhận trợ lý AI trong môi trường làm việc.",
      "Tác động của chuyển đổi số đến hiệu quả hoạt động của doanh nghiệp Việt Nam.",
      "Vai trò của năng lực số (Digital Capability) đối với lợi thế cạnh tranh của doanh nghiệp.",
      "Ảnh hưởng của chuyển đổi số đến hiệu quả quản trị doanh nghiệp nhỏ và vừa.",
      "Tác động của chuyển đổi số kết hợp chuyển đổi xanh (Twin Transition) đến hiệu quả kinh doanh.",
      "Các yếu tố ảnh hưởng đến thành công của quá trình chuyển đổi số trong doanh nghiệp.",
      "Vai trò của ESG trong nâng cao hiệu quả hoạt động của doanh nghiệp Việt Nam.",
      "Các yếu tố ảnh hưởng đến hành vi tiêu dùng xanh của thế hệ Gen Z.",
      "Tác động của đổi mới sáng tạo xanh (Green Innovation) đến năng lực cạnh tranh của doanh nghiệp.",
      "Vai trò của kinh tế tuần hoàn trong phát triển bền vững của doanh nghiệp.",
      "Ảnh hưởng của trách nhiệm xã hội doanh nghiệp (CSR) đến giá trị thương hiệu.",
      "Các yếu tố ảnh hưởng đến ý định khởi nghiệp bền vững của sinh viên.",
      "Vai trò của năng lực đổi mới sáng tạo trong thúc đẩy ý định khởi nghiệp.",
      "Tác động của hệ sinh thái khởi nghiệp đại học đến hành vi khởi nghiệp của sinh viên.",
      "Ảnh hưởng của khả năng chống chịu khởi nghiệp (Entrepreneurial Resilience) đến ý định tiếp tục khởi nghiệp.",
      "Tác động của Creator Economy đến hành vi tiêu dùng của giới trẻ Việt Nam.",
      "Ảnh hưởng của AI-generated Influencer đến quyết định mua hàng trực tuyến.",
      "Các yếu tố ảnh hưởng đến hành vi mua sắm trên nền tảng Social Commerce.",
      "Vai trò của cá nhân hóa bằng AI trong nâng cao trải nghiệm khách hàng.",
      "Tác động của Gig Economy đến lựa chọn nghề nghiệp của sinh viên Việt Nam.",
      "Các yếu tố ảnh hưởng đến khả năng thích ứng nghề nghiệp của sinh viên trong bối cảnh nền kinh tế AI."
    ].map((t, i) => ({
      id: `qtkd-${i + 1}`,
      title: `${i + 1}. ${t}`,
      topic: t,
      rq: `Các nhân tố/cơ chế nào chi phối mạnh nhất đến trọng tâm của chủ đề "${t}" và tác động thực tiễn ra sao?`,
      context: "Doanh nghiệp, tổ chức hoặc sinh viên/người dùng tại Việt Nam; dữ liệu khảo sát Likert/SEM hoặc dữ liệu thứ cấp.",
      variables: "Y: Kết quả/Hành vi/Hiệu quả đầu ra | X: Nhân tố/Năng lực/Công nghệ/Chính sách | Mod/Med: Nhận thức, Môi trường, Quy mô",
      method: "Cronbach's Alpha, EFA, CFA, SEM / PLS-SEM hoặc Panel Regression / GMM",
      query: `"${t.split("(")[0].trim()}" AND ("Vietnam" OR "empirical" OR "SEM" OR "performance")`
    }))
  };

  const DEFAULT_STEPS_20 = [
    "Xác định rõ định hướng (Nghiên cứu hàn lâm, Ứng dụng thực tiễn hoặc Chủ đề QTKD/AI) và phạm vi chuyên ngành.",
    "Chọn chủ đề trọng tâm có tính thời sự, khoảng trống/điểm nghẽn thực tế và khả năng tiếp cận dữ liệu.",
    "Rà soát bức tranh tổng quan tài liệu (Literature Review) sơ bộ qua Scopus, Scholar, ConnectedPapers, PaperDigest và kho LR có sẵn.",
    "Nhận diện khoảng trống tri thức (Research Gap) hoặc bài toán/điểm nghẽn nghiệp vụ cần giải quyết (tránh suy diễn cảm tính).",
    "Xác định mục tiêu nghiên cứu, mục đích nghiên cứu, đối tượng nghiên cứu, khách thể nghiên cứu và phạm vi (không gian, thời gian, nội dung, mẫu).",
    "Đặt câu hỏi nghiên cứu (RQ) hoặc câu hỏi bài toán ứng dụng rõ ràng, đo lường được và gắn trực tiếp với từng mục tiêu.",
    "Xây dựng khung lý thuyết nền và tổng quan khái niệm theo hướng quy nạp, phản biện, có lập luận chọn khái niệm/quan điểm cuối cùng.",
    "Phát triển hệ thống giả thuyết nghiên cứu (mô tả, giải thích, giải pháp, dự báo) hoặc giả định mô hình/kịch bản thực hiện.",
    "Xây dựng khung biến/chỉ tiêu đầy đủ: biến độc lập (X), biến trung gian/điều tiết (Med/Mod), biến phụ thuộc (Y), biến kiểm soát (hoặc chỉ tiêu/đầu vào/đầu ra).",
    "Định nghĩa rõ công thức tính, thang đo (Likert 5/7, chỉ số tài chính, biến quan sát), đơn vị đo và nguồn dữ liệu cho từng biến/chỉ tiêu.",
    "Thiết kế công cụ thu thập dữ liệu (bảng hỏi Google Form/khảo sát, phỏng vấn, đối thoại, dữ liệu thứ cấp) và chiến lược chọn mẫu (cỡ mẫu tối thiểu >= 5*biến quan sát hoặc phù hợp mô hình).",
    "Làm sạch dữ liệu, xử lý giá trị thiếu/ngoại lai, kiểm tra tính nhất quán và phân loại đối tượng hợp lệ.",
    "Lựa chọn phương pháp/mô hình phân tích (Cronbach's Alpha, EFA, CFA, SEM/PLS-SEM, OLS/Panel FE-RE/System GMM, Logit/Scorecard, DCF/Stress test, hoặc phân tích định tính).",
    "Kiểm định các giả định mô hình, tính nội sinh, độ bền vững (robustness), kiểm định giả thuyết hoặc chạy kịch bản/độ nhạy.",
    "Tổng hợp bảng kết quả, biểu đồ, sơ đồ và chỉ số đánh giá; đặt tên bảng phía trên, tên hình/biểu đồ phía dưới và trích nguồn chuẩn.",
    "Diễn giải kết quả bằng văn phong khoa học khách quan (ưu tiên câu bị động, luận điểm–luận cứ–luận chứng, tránh tính từ áp đặt hoặc văn nói).",
    "Đối chiếu kết quả với các nghiên cứu trước, lý thuyết nền và thông lệ/chuẩn mực ngành (chỉ ra điểm đồng thuận, khác biệt và bằng chứng phản biện).",
    "Rút ra hàm ý lý luận, hàm ý quản trị/chính sách hoặc giải pháp/khuyến nghị cụ thể, khả thi (nêu rõ nội dung, cách thức, điều kiện thực hiện và đối tượng tiếp nhận).",
    "Chỉ ra hạn chế của nghiên cứu/mô hình (dữ liệu, phạm vi, biến số, phương pháp) và đề xuất hướng nghiên cứu tiếp theo.",
    "Chuẩn hóa Word (A4, lề 2-2-3-1.5, Time New Roman 14, giãn dòng, tắt tự động bullet/numbering), mục lục tự động, trích dẫn APA/IEEE/Footnote và kiểm soát tỷ lệ trùng lặp/AI trước khi nộp."
  ];

  const state = {
    orientation: "research",
    activeTab: "library",
    selectedPresetId: "",
    topic: "",
    rq: "",
    context: "",
    customInputText: "",
    steps20: [...DEFAULT_STEPS_20],
    stepOutputs: {},
    matrixRows: [],
    varRows: [],
    lrSearch: "",
    githubStatus: "Chưa đồng bộ trực tiếp"
  };

  function getBuiltinLr() {
    if (Array.isArray(window.BUILTIN_LR_DATA) && window.BUILTIN_LR_DATA.length > 0) {
      return window.BUILTIN_LR_DATA.map((d) => ({
        author: d.a || "",
        goal: `${d.g || ""}${d.s ? " [" + d.s + "]" : ""}`,
        vars: d.v || "",
        method: d.m || "",
        finding: d.f || "",
        source: d.s || "Tệp tích hợp"
      }));
    }
    return [
      {
        author: "Gagné, M.; Deci, E. L. (2005)",
        goal: "Self-determination theory and work motivation [Q1]",
        vars: "SDT; autonomous motivation; controlled motivation; basic psychological needs",
        method: "Theoretical review / SDT framework",
        finding: "Thỏa mãn tự chủ, năng lực và gắn kết thúc đẩy động lực tự chủ và hiệu suất bền vững.",
        source: "Mặc định"
      }
    ];
  }

  function buildVarRowFromCurrentState() {
    const preset = getCurrentPreset();
    const topic = state.topic.trim() || "[Chưa nhập tên đề tài]";
    const rq = state.rq.trim() || "[Chưa nhập RQ / Mục tiêu]";
    const ctx = state.context.trim() || "[Chưa nhập bối cảnh / dữ liệu]";
    const varsText = preset
      ? preset.variables
      : "Y: Biến/Chỉ tiêu đầu ra | X: Biến/Nhân tố tác động | Controls: Quy mô, Đòn bẩy, Bối cảnh";
    const methodText = preset
      ? preset.method
      : "Khảo sát / Định lượng (Cronbach's Alpha, EFA, CFA, SEM/PLS-SEM, OLS/Panel/GMM) hoặc Định tính / Mô hình đánh giá";

    const parts = varsText.split("|").map((s) => s.trim());
    const yVar = parts[0] || "Y: Biến phụ thuộc / Chỉ tiêu mục tiêu";
    const xVar = parts[1] || "X: Biến độc lập / Yếu tố tác động";
    const medModVar = parts.slice(2).join(" | ") || "Biến trung gian / Điều tiết / Biến kiểm soát";

    return {
      meta: `Đề tài: ${topic} | RQ: ${rq} | Bối cảnh: ${ctx}`,
      yVar,
      xVar,
      medModVar,
      methodScale: methodText
    };
  }

  function rebuildVarRowsFromTopic() {
    state.varRows = [buildVarRowFromCurrentState()];
    saveState();
    renderVarFramework();
  }

  function loadSavedState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        Object.assign(state, parsed);
        if (!Array.isArray(state.steps20) || state.steps20.length !== 20) {
          state.steps20 = [...DEFAULT_STEPS_20];
        }
        if (!state.stepOutputs || typeof state.stepOutputs !== "object") {
          state.stepOutputs = {};
        }
      }
    } catch (_) {}
    if (!Array.isArray(state.matrixRows) || state.matrixRows.length === 0) {
      state.matrixRows = getBuiltinLr().slice(0, 12);
    }
    if (!Array.isArray(state.varRows) || state.varRows.length === 0) {
      state.varRows = [buildVarRowFromCurrentState()];
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  const els = {
    orientBtns: Array.from(document.querySelectorAll(".orient-btn")),
    tabBtns: Array.from(document.querySelectorAll(".tab-btn")),
    tabPanels: Array.from(document.querySelectorAll(".tab-panel")),
    presetSelect: document.getElementById("presetSelect"),
    autoRunAllBtn: document.getElementById("autoRunAllBtn"),
    runAllStepsBtn: document.getElementById("runAllStepsBtn"),
    resetBtn: document.getElementById("resetBtn"),
    topicInput: document.getElementById("topicInput"),
    rqInput: document.getElementById("rqInput"),
    contextInput: document.getElementById("contextInput"),
    customDataFile: document.getElementById("customDataFile"),
    stepSourceFile: document.getElementById("stepSourceFile"),
    stepSourceUrlInput: document.getElementById("stepSourceUrlInput"),
    fetchStepUrlBtn: document.getElementById("fetchStepUrlBtn"),
    stepIngestStatus: document.getElementById("stepIngestStatus"),
    customDataTextarea: document.getElementById("customDataTextarea"),
    applyCustomInputBtn: document.getElementById("applyCustomInputBtn"),
    autoPipelineOutput: document.getElementById("autoPipelineOutput"),
    syncGithubBtn: document.getElementById("syncGithubBtn"),
    syncGithubMatrixBtn: document.getElementById("syncGithubMatrixBtn"),
    exportProjectBtn: document.getElementById("exportProjectBtn"),
    multiExportToggleBtn: document.getElementById("multiExportToggleBtn"),
    multiExportPanel: document.getElementById("multiExportPanel"),
    expOptWord: document.getElementById("expOptWord"),
    expOptPdf: document.getElementById("expOptPdf"),
    expOptTxt: document.getElementById("expOptTxt"),
    expOptMd: document.getElementById("expOptMd"),
    expOptJson: document.getElementById("expOptJson"),
    expScopeSelect: document.getElementById("expScopeSelect"),
    runMultiExportBtn: document.getElementById("runMultiExportBtn"),
    syncStatusText: document.getElementById("syncStatusText"),
    libraryTitle: document.getElementById("libraryTitle"),
    libraryDesc: document.getElementById("libraryDesc"),
    orientationPill: document.getElementById("orientationPill"),
    presetGrid: document.getElementById("presetGrid"),
    stepsList: document.getElementById("stepsList"),
    copyAllStepsBtn: document.getElementById("copyAllStepsBtn"),
    promptsList: document.getElementById("promptsList"),
    lrStatsText: document.getElementById("lrStatsText"),
    lrSearchInput: document.getElementById("lrSearchInput"),
    lrCountBadge: document.getElementById("lrCountBadge"),
    matrixBody: document.getElementById("matrixBody"),
    addRowBtn: document.getElementById("addRowBtn"),
    copyMatrixBtn: document.getElementById("copyMatrixBtn"),
    exportMatrixExcelBtn: document.getElementById("exportMatrixExcelBtn"),
    rebuildVarTableBtn: document.getElementById("rebuildVarTableBtn"),
    addVarRowBtn: document.getElementById("addVarRowBtn"),
    copyVarTableBtn: document.getElementById("copyVarTableBtn"),
    exportVarExcelBtn: document.getElementById("exportVarExcelBtn"),
    varFrameworkBody: document.getElementById("varFrameworkBody"),
    toast: document.getElementById("toast")
  };

  function showToast(msg) {
    if (!els.toast) return;
    els.toast.textContent = msg || "Đã xử lý";
    els.toast.classList.add("show");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => {
      els.toast.classList.remove("show");
    }, 2000);
  }

  function setStepIngestStatus(msg) {
    if (els.stepIngestStatus) els.stepIngestStatus.textContent = msg;
  }

  async function copyText(text, label) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      showToast(label ? `Đã copy: ${label}` : "Đã copy");
    } catch (_) {
      showToast("Không thể copy tự động, hãy bôi đen thủ công");
    }
  }

  function saveExportBlob(content, fileName, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportRowsToExcel(headers, rows, fileName, sheetName) {
    if (!window.XLSX) {
      showToast("Thư viện xuất Excel chưa tải xong");
      return;
    }
    const aoa = [headers, ...rows];
    const ws = window.XLSX.utils.aoa_to_sheet(aoa);
    const wb = window.XLSX.utils.book_new();
    window.XLSX.utils.book_append_sheet(wb, ws, sheetName || "Data");
    window.XLSX.writeFile(wb, fileName);
    showToast(`Đã xuất ${fileName}`);
  }

  function buildMultiExportPayload(scope) {
    const topic = state.topic.trim() || "(Chưa nhập tên đề tài)";
    const rq = state.rq.trim() || "(Chưa nhập RQ / Mục tiêu)";
    const ctx = state.context.trim() || "(Chưa nhập bối cảnh / dữ liệu)";

    const matrixSection = {
      title: "Literature Review Matrix",
      headers: [
        "Tác giả (Năm)",
        "Mục tiêu / Bối cảnh / Nguồn",
        "Biến / Chỉ tiêu chính",
        "Phương pháp / Công cụ",
        "Kết quả & Khoảng trống / Ứng dụng"
      ],
      rows: state.matrixRows.map((r) => [r.author, r.goal, r.vars, r.method, r.finding])
    };

    const varSection = {
      title: "Khung biến / Chỉ tiêu",
      headers: [
        "Đề tài / RQ / Bối cảnh",
        "Biến phụ thuộc / Chỉ tiêu đầu ra (Y)",
        "Biến độc lập / Nhân tố tác động (X)",
        "Trung gian / Điều tiết / Kiểm soát (Med/Mod/Controls)",
        "Phương pháp & Thang đo gợi ý"
      ],
      rows: state.varRows.map((r) => [r.meta, r.yVar, r.xVar, r.medModVar, r.methodScale])
    };

    if (scope === "matrix") {
      return {
        baseName: "FBRH_LR_Matrix",
        heading: `LR MATRIX — ${topic}`,
        jsonObj: { exportedAt: new Date().toISOString(), topic, matrixRows: state.matrixRows },
        sections: [matrixSection]
      };
    }

    if (scope === "varframework") {
      return {
        baseName: "FBRH_Khung_Bien",
        heading: `KHUNG BIẾN / CHỈ TIÊU — ${topic}`,
        jsonObj: { exportedAt: new Date().toISOString(), topic, rq, context: ctx, varRows: state.varRows },
        sections: [varSection]
      };
    }

    const stepsRows = state.steps20.map((s, i) => [
      `Bước ${i + 1}`,
      s,
      state.stepOutputs[i] ? "Đã chạy" : "Chưa chạy",
      state.stepOutputs[i] || "",
      ""
    ]);

    return {
      baseName: "FBRH_Du_An_Tong_Hop",
      heading: `BÁO CÁO DỰ ÁN — ${topic}`,
      metaLines: [`Đề tài: ${topic}`, `RQ / Mục tiêu: ${rq}`, `Bối cảnh / Dữ liệu: ${ctx}`],
      jsonObj: {
        exportedAt: new Date().toISOString(),
        targetRepo: "longtr99/fbrh",
        orientation: state.orientation,
        topic: state.topic,
        rq: state.rq,
        context: state.context,
        customInputText: state.customInputText,
        steps20: state.steps20,
        stepOutputs: state.stepOutputs,
        matrixRows: state.matrixRows,
        varRows: state.varRows
      },
      sections: [
        varSection,
        matrixSection,
        {
          title: "Sổ tay 20 Bước",
          headers: ["Bước", "Nội dung bước", "Trạng thái", "Kết quả / Prompt đã sinh", "Ghi chú"],
          rows: stepsRows
        }
      ]
    };
  }

  function formatMultiTxt(payload) {
    const lines = [payload.heading, "========================================"];
    if (payload.metaLines) lines.push(...payload.metaLines, "");
    payload.sections.forEach((sec) => {
      lines.push(`[${sec.title}]`);
      sec.rows.forEach((r, idx) => {
        lines.push(`${idx + 1}. ` + r.map((val, ci) => `${sec.headers[ci]}: ${val || ""}`).join(" | "));
      });
      lines.push("");
    });
    return lines.join("\n");
  }

  function formatMultiMd(payload) {
    const lines = [`# ${payload.heading}`, ""];
    if (payload.metaLines) {
      payload.metaLines.forEach((m) => lines.push(`- **${m}**`));
      lines.push("");
    }
    payload.sections.forEach((sec) => {
      lines.push(`## ${sec.title}`, "");
      lines.push(`| ${sec.headers.map((h) => String(h).replace(/\|/g, "\\|")).join(" | ")} |`);
      lines.push(`| ${sec.headers.map(() => "---").join(" | ")} |`);
      sec.rows.forEach((r) => {
        lines.push(`| ${r.map((val) => String(val || "").replace(/\r?\n/g, " ").replace(/\|/g, "\\|")).join(" | ")} |`);
      });
      lines.push("");
    });
    return lines.join("\n");
  }

  function formatMultiWordHtml(payload) {
    const meta = (payload.metaLines || []).map((m) => `<p><strong>${escapeHtml(m)}</strong></p>`).join("");
    const secs = payload.sections
      .map((sec) => {
        const ths = sec.headers
          .map((h) => `<th style="border:1px solid #94a3b8;padding:6px;background:#f1f5f9;">${escapeHtml(h)}</th>`)
          .join("");
        const trs = sec.rows
          .map(
            (r) =>
              `<tr>${r
                .map(
                  (val) =>
                    `<td style="border:1px solid #cbd5e1;padding:6px;vertical-align:top;">${escapeHtml(val || "").replace(/\r?\n/g, "<br/>")}</td>`
                )
                .join("")}</tr>`
          )
          .join("");
        return `<h3>${escapeHtml(sec.title)}</h3><table style="width:100%;border-collapse:collapse;font-size:11pt;margin-bottom:14px;"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`;
      })
      .join("");
    return `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><title>${escapeHtml(payload.heading)}</title></head><body style="font-family:Times New Roman,serif;"><h2>${escapeHtml(payload.heading)}</h2>${meta}${secs}</body></html>`;
  }

  function openPdfPrintPreview(payload) {
    const html = formatMultiWordHtml(payload);
    const w = window.open("", "_blank", "width=900,height=700");
    if (!w) {
      showToast("Trình duyệt đang chặn popup — hãy bật popup để xem trước & lưu PDF");
      return;
    }
    w.document.write(html);
    w.document.close();
    w.focus();
    setTimeout(() => {
      w.print();
    }, 300);
  }

  function escapeHtml(val) {
    return String(val || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(val) {
    return String(val || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }

  function setActiveTab(tabName) {
    state.activeTab = tabName;
    els.tabBtns.forEach((btn) => {
      const isMatch = btn.dataset.tab === tabName;
      btn.classList.toggle("active", isMatch);
      btn.setAttribute("aria-selected", String(isMatch));
    });
    els.tabPanels.forEach((panel) => {
      const isMatch = panel.id === `tab-${tabName}`;
      panel.classList.toggle("active", isMatch);
      panel.hidden = !isMatch;
    });
    saveState();
  }

  function getCurrentPreset() {
    const list = PRESETS[state.orientation] || [];
    return list.find((p) => p.id === state.selectedPresetId) || null;
  }

  function autoPopulateMatrixByTopic() {
    const allBuiltin = getBuiltinLr();
    const keywords = `${state.topic} ${state.rq} ${state.context}`
      .toLowerCase()
      .split(/[\s,;:|/()\-–—]+/)
      .filter((w) => w.length >= 3);

    const scored = allBuiltin.map((item) => {
      const hay = `${item.author} ${item.goal} ${item.vars} ${item.method} ${item.finding}`.toLowerCase();
      let score = 0;
      keywords.forEach((kw) => {
        if (hay.includes(kw)) score += 1;
      });
      return { item, score };
    });

    scored.sort((a, b) => b.score - a.score);
    const matched = scored.filter((x) => x.score > 0).slice(0, 15).map((x) => x.item);
    const selected = matched.length >= 5 ? matched : allBuiltin.slice(0, 12);

    state.matrixRows = selected.map((r) => ({
      author: r.author,
      goal: r.goal,
      vars: r.vars,
      method: r.method,
      finding: r.finding
    }));

    saveState();
    renderMatrix();
    showToast(`Đã tự động nhảy ${state.matrixRows.length} công trình vào LR Matrix`);
  }

  async function extractTextFromPdfBuffer(arrayBuffer) {
    if (!window.pdfjsLib) throw new Error("Thư viện PDF chưa tải xong");
    const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const chunks = [];
    const maxPages = Math.min(pdf.numPages, 30);
    for (let p = 1; p <= maxPages; p++) {
      const page = await pdf.getPage(p);
      const content = await page.getTextContent();
      const pageStr = content.items.map((it) => it.str || "").join(" ").trim();
      if (pageStr) chunks.push(`[Trang ${p}] ${pageStr}`);
    }
    return chunks.join("\n\n");
  }

  async function extractTextFromDocxBuffer(arrayBuffer) {
    if (!window.mammoth) throw new Error("Thư viện Word (.docx) chưa tải xong");
    const result = await window.mammoth.extractRawText({ arrayBuffer });
    return String(result && result.value ? result.value : "").trim();
  }

  function extractTextFromExcelBuffer(arrayBuffer, fileName) {
    if (!window.XLSX) throw new Error("Thư viện Excel/CSV chưa tải xong");
    const wb = window.XLSX.read(arrayBuffer, { type: "array" });
    const parts = [];
    const matrixAddition = [];

    for (const sName of wb.sheetNames) {
      const rows = window.XLSX.utils.sheet_to_json(wb.Sheets[sName], { defval: "" });
      if (!rows.length) continue;
      parts.push(`[Sheet: ${sName}] (${rows.length} dòng)\n` + rows.slice(0, 20).map((r) => JSON.stringify(r)).join("\n"));
      rows.slice(0, 40).forEach((r, i) => {
        const vals = Object.values(r);
        matrixAddition.push({
          author: String(r["Tên tác giả"] || r.Authors || r.Author || vals[1] || `${fileName} #${i + 1}`),
          goal: String(r["Tên công trình"] || r.Title || r.Goal || vals[2] || `${fileName} [${sName}]`),
          vars: String(r.Keyword || r.Keywords || r.Variables || r.Vars || vals[4] || ""),
          method: String(r.Method || r["Phương pháp"] || r.DOI || vals[5] || fileName),
          finding: String(r["Tóm tắt (150–300 từ)"] || r.Takeaway || r.Finding || vals[6] || Object.values(r).join(" | "))
        });
      });
    }

    if (matrixAddition.length) {
      state.matrixRows = [...matrixAddition, ...state.matrixRows];
    }
    return parts.join("\n\n");
  }

  async function ingestBufferByName(arrayBuffer, name, targetFor20Steps) {
    const lower = String(name || "").toLowerCase();
    let extracted = "";

    if (lower.endsWith(".pdf")) {
      extracted = await extractTextFromPdfBuffer(arrayBuffer);
    } else if (lower.endsWith(".docx") || lower.endsWith(".doc")) {
      extracted = await extractTextFromDocxBuffer(arrayBuffer);
    } else if (lower.endsWith(".xlsx") || lower.endsWith(".xls") || lower.endsWith(".csv")) {
      extracted = extractTextFromExcelBuffer(arrayBuffer, name);
    } else {
      extracted = new TextDecoder("utf-8").decode(arrayBuffer);
      if (lower.endsWith(".json")) {
        try {
          const parsed = JSON.parse(extracted);
          const arr = Array.isArray(parsed) ? parsed : (parsed.items || parsed.matrixRows || []);
          if (Array.isArray(arr) && arr.length) {
            const mapped = arr.slice(0, 40).map((x) => ({
              author: x.author || x.Authors || name,
              goal: x.goal || x.Title || name,
              vars: x.vars || x.Keyword || "",
              method: x.method || x.Method || name,
              finding: x.finding || x.Takeaway || ""
            }));
            state.matrixRows = [...mapped, ...state.matrixRows];
          }
        } catch (_) {}
      }
    }

    const cleaned = String(extracted || "").trim();
    const block = `\n--- [Nguồn: ${name}] ---\n${cleaned.slice(0, 6000)}`;
    state.customInputText = `${state.customInputText}${block}`.trim();
    if (els.customDataTextarea) els.customDataTextarea.value = state.customInputText;
    saveState();
    renderMatrix();
    renderPrompts();

    if (targetFor20Steps) {
      setStepIngestStatus(`Đã nạp & bóc tách "${name}" (${cleaned.length} ký tự) cho 20 bước.`);
    }
    showToast(`Đã nạp ${name}`);
  }

  async function handleCustomFileUpload(file, targetFor20Steps = false) {
    if (!file) return;
    try {
      if (targetFor20Steps) setStepIngestStatus(`Đang đọc tệp "${file.name}"...`);
      const buf = await file.arrayBuffer();
      await ingestBufferByName(buf, file.name, targetFor20Steps);
    } catch (err) {
      const msg = `Lỗi đọc tệp "${file.name}": ${err.message || err}`;
      if (targetFor20Steps) setStepIngestStatus(msg);
      showToast(msg);
    }
  }

  async function handleFetchFromUrl() {
    const rawUrl = (els.stepSourceUrlInput && els.stepSourceUrlInput.value || "").trim();
    if (!rawUrl) {
      showToast("Hãy dán link file online trước");
      return;
    }
    try {
      setStepIngestStatus(`Đang tải dữ liệu từ link: ${rawUrl}...`);
      const res = await fetch(rawUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const contentType = (res.headers.get("content-type") || "").toLowerCase();
      const urlPath = rawUrl.split("?")[0].split("/").pop() || "online-source";

      if (contentType.includes("pdf") || urlPath.toLowerCase().endsWith(".pdf")) {
        const buf = await res.arrayBuffer();
        await ingestBufferByName(buf, urlPath.endsWith(".pdf") ? urlPath : `${urlPath}.pdf`, true);
      } else if (
        contentType.includes("word") ||
        contentType.includes("officedocument.wordprocessingml") ||
        /\.(docx|doc)$/i.test(urlPath)
      ) {
        const buf = await res.arrayBuffer();
        await ingestBufferByName(buf, /\.(docx|doc)$/i.test(urlPath) ? urlPath : `${urlPath}.docx`, true);
      } else if (
        contentType.includes("spreadsheet") ||
        contentType.includes("excel") ||
        /\.(xlsx|xls|csv)$/i.test(urlPath)
      ) {
        const buf = await res.arrayBuffer();
        await ingestBufferByName(buf, urlPath, true);
      } else {
        const txt = await res.text();
        const block = `\n--- [Link online: ${rawUrl}] ---\n${txt.slice(0, 6000)}`;
        state.customInputText = `${state.customInputText}${block}`.trim();
        els.customDataTextarea.value = state.customInputText;
        saveState();
        renderPrompts();
        setStepIngestStatus(`Đã tải nội dung từ link (${txt.length} ký tự) cho 20 bước.`);
        showToast("Đã tải dữ liệu từ link");
      }
    } catch (err) {
      const errMsg = `Không tải trực tiếp được link (${err.message || "CORS/mạng"}) — hãy tải file về máy rồi chọn nút "Chọn tệp offline"`;
      setStepIngestStatus(errMsg);
      showToast("Không tải trực tiếp được link (kiểm tra CORS)");
    }
  }

  function parseCsvSimple(csvText) {
    const lines = String(csvText || "").split(/\r?\n/).filter((l) => l.trim());
    if (lines.length < 2) return [];
    const splitLine = (line) => {
      const out = [];
      let cur = "";
      let inQ = false;
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
          inQ = !inQ;
        } else if (ch === "," && !inQ) {
          out.push(cur.trim());
          cur = "";
        } else {
          cur += ch;
        }
      }
      out.push(cur.trim());
      return out;
    };
    const headers = splitLine(lines[0]);
    return lines.slice(1).map((l) => {
      const cells = splitLine(l);
      const obj = {};
      headers.forEach((h, i) => {
        obj[h] = cells[i] || "";
      });
      return obj;
    });
  }

  async function syncFromGithubResearchWorkflow() {
    els.syncStatusText.textContent = "Đang đồng bộ dữ liệu từ GitHub longtr99/research-workflow vào fbrh...";
    try {
      const apiUrl = `https://api.github.com/repos/${SOURCE_GITHUB_REPO.owner}/${SOURCE_GITHUB_REPO.repo}/git/trees/HEAD?recursive=1`;
      const res = await fetch(apiUrl, { headers: { Accept: "application/vnd.github+json" } });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const treeData = await res.json();
      const blobs = (treeData.tree || [])
        .filter((n) => n.type === "blob" && /\.(json|csv|md|txt|tsv)$/i.test(n.path))
        .slice(0, 15);

      let importedCount = 0;
      const notes = [];

      for (const blob of blobs) {
        const rawUrl = `https://raw.githubusercontent.com/${SOURCE_GITHUB_REPO.owner}/${SOURCE_GITHUB_REPO.repo}/HEAD/${blob.path}`;
        const fRes = await fetch(rawUrl);
        if (!fRes.ok) continue;
        const txt = await fRes.text();

        if (blob.path.toLowerCase().endsWith(".json")) {
          try {
            const parsed = JSON.parse(txt);
            const list = Array.isArray(parsed) ? parsed : (parsed.items || parsed.matrixRows || []);
            if (Array.isArray(list) && list.length > 0) {
              const mapped = list.slice(0, 30).map((x) => ({
                author: x.author || x.Authors || `GitHub: ${blob.path}`,
                goal: x.goal || x.Title || blob.path,
                vars: x.vars || x.Keyword || "",
                method: x.method || x.Method || blob.path,
                finding: x.finding || x.Takeaway || x.Abstract || ""
              }));
              state.matrixRows = [...mapped, ...state.matrixRows];
              importedCount += mapped.length;
            }
          } catch (_) {}
        } else if (blob.path.toLowerCase().endsWith(".csv")) {
          const rows = parseCsvSimple(txt);
          if (rows.length > 0) {
            const mapped = rows.slice(0, 30).map((r) => ({
              author: r.Authors || r.Author || r["Tên tác giả"] || `GitHub: ${blob.path}`,
              goal: r.Title || r["Tên công trình"] || blob.path,
              vars: r.Keyword || r.Variables || "",
              method: r.Method || blob.path,
              finding: r.Takeaway || r.Finding || r.Abstract || Object.values(r).join(" | ")
            }));
            state.matrixRows = [...mapped, ...state.matrixRows];
            importedCount += mapped.length;
          }
        } else {
          notes.push(`[GitHub ${blob.path}]: ${txt.slice(0, 400).replace(/\s+/g, " ")}`);
        }
      }

      if (notes.length) {
        state.customInputText = `${state.customInputText}\n${notes.join("\n")}`.trim();
        els.customDataTextarea.value = state.customInputText;
      }

      state.githubStatus = `Đã đồng bộ ${importedCount} dòng & ${notes.length} tài liệu từ research-workflow`;
      els.syncStatusText.textContent = state.githubStatus;
      saveState();
      renderMatrix();
      renderPrompts();
      showToast(state.githubStatus);
    } catch (err) {
      state.githubStatus = `Chưa đồng bộ trực tiếp (${err.message || "lỗi mạng/repo"}) — Đang dùng kho tích hợp + localStorage`;
      els.syncStatusText.textContent = state.githubStatus;
      showToast("Đã dùng kho dữ liệu tích hợp sẵn trên fbrh");
    }
  }

  function exportProjectJson() {
    const bundle = buildMultiExportPayload("all");
    saveExportBlob(JSON.stringify(bundle.jsonObj, null, 2), "fbrh-research-project.json", "application/json;charset=utf-8");
    showToast("Đã xuất JSON dự án fbrh");
  }

  function generateStepOutput(stepIdx) {
    const stepText = state.steps20[stepIdx] || "";
    const topic = state.topic.trim() || "[Chưa nhập tên đề tài / chủ đề]";
    const rq = state.rq.trim() || "[Chưa nhập RQ / Mục tiêu trọng tâm]";
    const ctx = state.context.trim() || "[Chưa nhập bối cảnh / dữ liệu]";
    const extraData = state.customInputText.trim() || "Sử dụng dữ liệu nền tảng đã nạp trực tiếp trong Workbench.";
    const matchedRows = state.matrixRows.slice(0, 5).map((r) => `- ${r.author}: ${r.goal} (${r.method})`).join("\n");

    return (
      `[Thực thi Bước ${stepIdx + 1}/20 — ${stepText}]\n` +
      `Chủ đề/Đề tài: ${topic}\n` +
      `RQ / Mục tiêu: ${rq}\n` +
      `Bối cảnh & Dữ liệu: ${ctx}\n` +
      `Dữ liệu nạp thêm:\n${extraData.slice(0, 1200)}\n` +
      `Tài liệu tham khảo liên quan trong LR Matrix:\n${matchedRows}\n\n` +
      `Yêu cầu đầu ra:\n` +
      `1. Phân tích & hoàn thành trực tiếp nội dung của Bước ${stepIdx + 1} cho đề tài trên (phân biệt rõ dữ kiện xác minh, suy luận, giả thuyết, không bịa nguồn/số liệu).\n` +
      `2. Cung cấp bảng/khung/checklist hoặc ví dụ áp dụng cụ thể để dán ngay vào bản thảo nghiên cứu/báo cáo.`
    );
  }

  function runSingleStep(stepIdx) {
    state.stepOutputs[stepIdx] = generateStepOutput(stepIdx);
    saveState();
    renderSteps();
    showToast(`Đã xử lý Bước ${stepIdx + 1}`);
  }

  function runAll20Steps() {
    const outputs = [];
    for (let i = 0; i < 20; i++) {
      const out = generateStepOutput(i);
      state.stepOutputs[i] = out;
      outputs.push(`=== BƯỚC ${i + 1}: ${state.steps20[i]} ===\n${out}`);
    }
    saveState();
    renderSteps();
    els.autoPipelineOutput.hidden = false;
    els.autoPipelineOutput.innerHTML = `
      <div class="item-top">
        <span class="item-title">Kết quả chạy tự động toàn bộ 20 bước (Đề tài: ${escapeHtml(state.topic.trim() || "Chưa đặt tên")})</span>
        <button type="button" class="btn-copy" id="copyAll20OutputsBtn">Copy toàn bộ 20 bước đã chạy</button>
      </div>
      <pre class="prompt-pre">${escapeHtml(outputs.join("\n\n"))}</pre>
    `;
    const copyBtn = document.getElementById("copyAll20OutputsBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => copyText(outputs.join("\n\n"), "Pipeline 20 bước tự động"));
    }
    setActiveTab("handbook");
    showToast("Đã chạy tự động xong toàn bộ 20 bước!");
  }

  function setOrientation(orient) {
    if (!PRESETS[orient]) return;
    state.orientation = orient;
    els.orientBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.orientation === orient);
    });

    const isResearch = orient === "research";
    const isApplied = orient === "applied";

    els.orientationPill.textContent = isResearch
      ? "Đang chọn: Nghiên cứu"
      : isApplied
        ? "Đang chọn: Ứng dụng"
        : "Đang chọn: 30 Chủ đề QTKD & AI";

    els.libraryTitle.textContent = isResearch
      ? "Thư viện 6 Hướng nghiên cứu chuyên ngành Tài chính – Ngân hàng (Chọn & Nạp 1 chạm)"
      : isApplied
        ? "Thư viện 6 Hướng ứng dụng chuyên ngành Tài chính – Ngân hàng (Chọn & Nạp 1 chạm)"
        : "Kho 30 Chủ đề NCKH Lĩnh vực Kinh tế, QTKD & AI (ThS. Đặng Văn Phong)";

    els.libraryDesc.textContent = isResearch
      ? "Tập trung khoảng trống nghiên cứu, biến số, mô hình kinh tế lượng, kiểm định giả thuyết và truy vấn Scopus."
      : isApplied
        ? "Tập trung bài toán thực tế, bộ chỉ tiêu/mô hình chấm điểm – định giá – quản trị rủi ro và kịch bản triển khai."
        : "Chọn 1 chủ đề trong 30 chủ đề để tự động điền đề tài, RQ, biến số, phương pháp và đồng bộ LR Matrix + Khung biến.";

    renderPresetSelect();
    renderPresetGrid();
    renderPrompts();
    saveState();
  }

  function renderPresetSelect() {
    const items = PRESETS[state.orientation] || [];
    els.presetSelect.innerHTML =
      `<option value="">-- Nạp nhanh (${els.orientationPill.textContent.replace("Đang chọn: ", "")}) --</option>` +
      items.map((p) => `<option value="${escapeAttr(p.id)}" ${p.id === state.selectedPresetId ? "selected" : ""}>${escapeHtml(p.title)}</option>`).join("");
  }

  function applyPresetById(id) {
    const items = PRESETS[state.orientation] || [];
    const found = items.find((p) => p.id === id);
    if (!found) return;
    state.selectedPresetId = found.id;
    state.topic = found.topic;
    state.rq = found.rq;
    state.context = `${found.context} | Biến: ${found.variables} | Phương pháp: ${found.method}`;
    els.topicInput.value = state.topic;
    els.rqInput.value = state.rq;
    els.contextInput.value = state.context;
    els.presetSelect.value = found.id;
    autoPopulateMatrixByTopic();
    rebuildVarRowsFromTopic();
    renderPrompts();
    saveState();
    showToast(`Đã nạp & nhảy dữ liệu: ${found.title}`);
  }

  function renderPresetGrid() {
    const items = PRESETS[state.orientation] || [];
    els.presetGrid.innerHTML = items
      .map(
        (p) => `
      <article class="preset-card">
        <div>
          <h3>${escapeHtml(p.title)}</h3>
          <p class="preset-meta"><strong>Đề tài:</strong> ${escapeHtml(p.topic)}</p>
          <p class="preset-meta"><strong>RQ / Trọng tâm:</strong> ${escapeHtml(p.rq)}</p>
          <div class="preset-detail">
            <p><strong>Biến / Chỉ tiêu:</strong> ${escapeHtml(p.variables)}</p>
            <p><strong>Phương pháp / Mô hình:</strong> ${escapeHtml(p.method)}</p>
            <p><strong>Truy vấn tham khảo:</strong> ${escapeHtml(p.query)}</p>
          </div>
        </div>
        <div class="card-actions">
          <button type="button" class="btn-primary btn-load-preset" data-id="${escapeAttr(p.id)}">Nạp &amp; Chạy tự động</button>
          <button type="button" class="btn-secondary btn-copy-preset" data-id="${escapeAttr(p.id)}">Copy thông tin</button>
        </div>
      </article>
    `
      )
      .join("");
  }

  function renderSteps() {
    els.stepsList.innerHTML = state.steps20
      .map((step, idx) => {
        const out = state.stepOutputs[idx];
        return `
      <div class="item-box" data-step-idx="${idx}">
        <div class="item-top">
          <span class="item-title">Bước ${idx + 1} / 20</span>
          <div class="btn-group">
            <button type="button" class="btn-copy btn-run-step" data-index="${idx}">Chạy bước này</button>
            <button type="button" class="btn-secondary btn-copy-step" data-index="${idx}">Copy bước</button>
          </div>
        </div>
        <input type="text" class="step-edit-input" data-step-edit="${idx}" value="${escapeAttr(step)}" />
        ${
          out
            ? `<div class="step-result-box">
                 <div class="item-top">
                   <strong>Prompt / Kết quả xử lý Bước ${idx + 1}</strong>
                   <button type="button" class="btn-copy btn-copy-step-out" data-index="${idx}">Copy kết quả</button>
                 </div>
                 <pre class="prompt-pre">${escapeHtml(out)}</pre>
               </div>`
            : ""
        }
      </div>
    `;
      })
      .join("");
  }

  function buildPrompts() {
    const topic = state.topic.trim();
    const rq = state.rq.trim();
    const ctx = state.context.trim();
    const extra = state.customInputText.trim();
    const hasTopic = Boolean(topic);

    const baseTemplates = [
      {
        title: "1. Khung đề cương, biến số & phương pháp",
        baseBody:
          "Đóng vai cố vấn học thuật & chuyên gia ngành.\n" +
          "Đề tài / Bài toán: [Tên đề tài / bài toán]\n" +
          "Câu hỏi / Mục tiêu: [Câu hỏi nghiên cứu / mục tiêu]\n" +
          "Bối cảnh & Dữ liệu: [Bối cảnh / dữ liệu]\n" +
          "Hãy đề xuất: (1) Khoảng trống nghiên cứu hoặc điểm nghẽn thực tế, (2) Khung đề cương chi tiết, (3) Bảng biến/chỉ tiêu (tên, ký hiệu, thang đo/công thức, kỳ vọng dấu), (4) Phương pháp phân tích/kiểm định.",
        boundBody:
          `Đóng vai cố vấn học thuật & chuyên gia ngành.\n` +
          `Đề tài / Bài toán: ${topic}\n` +
          `Câu hỏi / Mục tiêu: ${rq || "Xác định nhân tố tác động, cơ chế truyền dẫn và hàm ý thực tiễn"}\n` +
          `Bối cảnh & Dữ liệu: ${ctx || "Theo bối cảnh và dữ liệu của đề tài"}\n` +
          `Hãy đề xuất: (1) Khoảng trống nghiên cứu hoặc điểm nghẽn thực tế, (2) Khung đề cương chi tiết, (3) Bảng biến/chỉ tiêu (tên, ký hiệu, thang đo/công thức, kỳ vọng dấu), (4) Phương pháp phân tích/kiểm định.`
      },
      {
        title: "2. Tổng hợp LR Matrix & Gap Matrix",
        baseBody:
          "Dựa CHỈ trên các tài liệu/dữ liệu đã nạp cho chủ đề [Tên đề tài], lập bảng tổng hợp gồm:\n" +
          "Tác giả (Năm) | Bối cảnh & Dữ liệu | Mô hình / Phương pháp | Biến/Chỉ tiêu chính | Kết quả chính | Hạn chế / Khoảng trống.\n" +
          "Phân biệt rõ: bằng chứng đã xác minh, suy luận của tác giả, gap do tác giả nêu và gap do suy luận; chỉ ra điểm đồng thuận, tranh luận và bằng chứng phản biện.",
        boundBody:
          `Dựa CHỈ trên các tài liệu/dữ liệu đã nạp cho chủ đề "${topic}", lập bảng tổng hợp gồm:\n` +
          `Tác giả (Năm) | Bối cảnh & Dữ liệu | Mô hình / Phương pháp | Biến/Chỉ tiêu chính | Kết quả chính | Hạn chế / Khoảng trống.\n` +
          `Phân biệt rõ: bằng chứng đã xác minh, suy luận của tác giả, gap do tác giả nêu và gap do suy luận; chỉ ra điểm đồng thuận, tranh luận và bằng chứng phản biện.`
      },
      {
        title: "3. Tóm tắt tài liệu chuẩn hóa (Tên, Biến, Lý thuyết, Phương pháp, Kết quả, Hạn chế)",
        baseBody:
          "Tóm tắt chi tiết tài liệu sau theo cấu trúc: Tên nghiên cứu [Tiếng Anh (Tiếng Việt)]; Tác giả; Quốc gia; Biến độc lập/trung gian/điều tiết/phụ thuộc (kèm kích thước nếu có); Lý thuyết nền & vai trò; Phương pháp (Khảo sát | Lấy mẫu | Phân tích dữ liệu); Đóng góp/Kết quả (giữ nguyên tên biến tiếng Anh); Hạn chế/Hướng nghiên cứu tương lai (bullet bắt đầu bằng đề mục ngắn gọn):\n[Dán nội dung tài liệu vào đây]",
        boundBody:
          `Tóm tắt chi tiết tài liệu sau phục vụ đề tài "${topic}" theo cấu trúc: Tên nghiên cứu [Tiếng Anh (Tiếng Việt)]; Tác giả; Quốc gia; Biến độc lập/trung gian/điều tiết/phụ thuộc (kèm kích thước nếu có); Lý thuyết nền & vai trò; Phương pháp (Khảo sát | Lấy mẫu | Phân tích dữ liệu); Đóng góp/Kết quả (giữ nguyên tên biến tiếng Anh); Hạn chế/Hướng nghiên cứu tương lai (bullet bắt đầu bằng đề mục ngắn gọn):\n${extra || "[Chưa dán thêm nội dung tài liệu — dùng corpus/dữ liệu đang nạp]"}`
      },
      {
        title: "4. Học có hướng dẫn từng bước (Socratic / Guided Learning)",
        baseBody:
          "Đóng vai gia sư đại học, hướng dẫn tôi hiểu sâu chủ đề [Tên chủ đề / khái niệm] theo phương pháp học có hướng dẫn.\n" +
          "Không giải toàn bộ ngay từ đầu; hãy hỏi tôi 2–3 câu hỏi kiểm tra hiểu biết trước, gợi ý khi tôi trả lời chưa đủ để tôi tự sửa, rồi mới chốt khái niệm và phân biệt các khía cạnh cốt lõi.",
        boundBody:
          `Đóng vai gia sư đại học, hướng dẫn tôi hiểu sâu đề tài/chủ đề "${topic}"${rq ? ` (RQ: ${rq})` : ""} theo phương pháp học có hướng dẫn.\n` +
          `Không giải toàn bộ ngay từ đầu; hãy hỏi tôi 2–3 câu hỏi kiểm tra hiểu biết trước, gợi ý khi tôi trả lời chưa đủ để tôi tự sửa, rồi mới chốt khái niệm và phân biệt các khía cạnh cốt lõi.`
      },
      {
        title: "5. Xây dựng tài liệu học tập & 10 câu hỏi tự kiểm tra",
        baseBody:
          "Dựa hoàn toàn trên tài liệu/dữ liệu sau, biên soạn tài liệu học tập gồm: (1) Mục tiêu học tập; (2) 5 kiến thức trọng tâm & lý do quan trọng; (3) Giải thích khái niệm khó + ví dụ; (4) Hệ thống hóa kiến thức; (5) 10 câu hỏi tự kiểm tra độ khó tăng dần (chưa cung cấp đáp án):\n[Dán nội dung chương/tài liệu vào đây]",
        boundBody:
          `Dựa hoàn toàn trên tài liệu/dữ liệu sau cho đề tài/chủ đề "${topic}", biên soạn tài liệu học tập gồm: (1) Mục tiêu học tập; (2) 5 kiến thức trọng tâm & lý do quan trọng; (3) Giải thích khái niệm khó + ví dụ; (4) Hệ thống hóa kiến thức; (5) 10 câu hỏi tự kiểm tra độ khó tăng dần (chưa cung cấp đáp án):\n${extra || "[Chưa dán thêm nội dung chương/tài liệu]"}`
      },
      {
        title: "6. Dịch thuật ngữ học thuật Anh–Việt giữ nguyên cấu trúc",
        baseBody:
          "Là chuyên gia ngôn ngữ Anh và nghiên cứu AI, hãy dịch chính xác đoạn văn sau cho bài báo khoa học, giữ nguyên cấu trúc câu văn, ngữ nghĩa và bối cảnh học thuật, diễn đạt tự nhiên:\n[Dán đoạn văn cần dịch vào đây]",
        boundBody:
          `Là chuyên gia ngôn ngữ Anh và nghiên cứu AI, hãy dịch chính xác đoạn văn sau cho bài báo khoa học về đề tài "${topic}", giữ nguyên cấu trúc câu văn, ngữ nghĩa và bối cảnh học thuật, diễn đạt tự nhiên:\n${extra || "[Chưa dán đoạn văn cần dịch]"}`
      },
      {
        title: "7. Dàn ý bộ Slide hội thảo khoa học (12–15 slide, ~10 phút)",
        baseBody:
          "Chuyển nghiên cứu/bài toán [Tên đề tài] thành bộ slide hội thảo 12–15 slide (~10 phút), tối giản chữ (mỗi slide ~30–40 từ, ưu tiên sơ đồ/biểu đồ/bảng).\n" +
          "Mỗi slide trình bày theo: SLIDE X — [Tên slide] | Objective | Main content | Suggested visual/graphic | Suggested layout | Presenter speaking notes (1–2 câu) | Estimated speaking time.",
        boundBody:
          `Chuyển nghiên cứu/bài toán "${topic}" thành bộ slide hội thảo 12–15 slide (~10 phút), tối giản chữ (mỗi slide ~30–40 từ, ưu tiên sơ đồ/biểu đồ/bảng).\n` +
          `Mỗi slide trình bày theo: SLIDE X — [Tên slide] | Objective | Main content | Suggested visual/graphic | Suggested layout | Presenter speaking notes (1–2 câu) | Estimated speaking time.`
      },
      {
        title: "8. Chuẩn hóa trích dẫn (APA / IEEE / Footnote) & Kiểm soát Turnitin",
        baseBody:
          "Áp dụng chuẩn trích dẫn (APA: tên tác giả Việt Nam dùng tên gọi, xếp alphabet; IEEE: [1] theo thứ tự xuất hiện; Footnote cuối trang) và quy tắc kiểm soát trùng lặp/Turnitin (ưu tiên trích dẫn gián tiếp, tóm tắt đại ý kết hợp đổi cấu trúc câu, kiểm tra miễn trừ Quotes/Bibliography, không chèn ký tự lạ/ẩn):\n[Dán nội dung cần kiểm tra/chuẩn hóa vào đây]",
        boundBody:
          `Áp dụng chuẩn trích dẫn (APA: tên tác giả Việt Nam dùng tên gọi, xếp alphabet; IEEE: [1] theo thứ tự xuất hiện; Footnote cuối trang) và quy tắc kiểm soát trùng lặp/Turnitin cho đề tài "${topic}" (ưu tiên trích dẫn gián tiếp, tóm tắt đại ý kết hợp đổi cấu trúc câu, kiểm tra miễn trừ Quotes/Bibliography, không chèn ký tự lạ/ẩn):\n${extra || "[Chưa dán nội dung cần kiểm tra/chuẩn hóa]"}`
      }
    ];

    return { hasTopic, topic, items: baseTemplates };
  }

  function renderPrompts() {
    const data = buildPrompts();
    window.__PROMPT_COPY_MAP = {};

    els.promptsList.innerHTML = data.items
      .map((pr, idx) => {
        const baseKey = `base_${idx}`;
        const boundKey = `bound_${idx}`;
        window.__PROMPT_COPY_MAP[baseKey] = pr.baseBody;
        window.__PROMPT_COPY_MAP[boundKey] = pr.boundBody;

        return `
      <div class="item-box">
        <div class="item-top">
          <span class="item-title">${escapeHtml(pr.title)} — Mẫu gốc</span>
          <button type="button" class="btn-copy btn-copy-prompt-key" data-copy-key="${baseKey}" data-copy-label="${escapeAttr(pr.title + " (Mẫu gốc)")}">Copy mẫu gốc</button>
        </div>
        <pre class="prompt-pre">${escapeHtml(pr.baseBody)}</pre>
        ${
          data.hasTopic
            ? `<div class="step-result-box">
                 <div class="item-top">
                   <strong style="font-size:12.5px;color:#0f766e;">Đã gắn đề tài: ${escapeHtml(data.topic)}</strong>
                   <button type="button" class="btn-primary btn-copy-prompt-key" data-copy-key="${boundKey}" data-copy-label="${escapeAttr(pr.title + " (Đã gắn đề tài)")}">Copy bản có đề tài</button>
                 </div>
                 <pre class="prompt-pre">${escapeHtml(pr.boundBody)}</pre>
               </div>`
            : ""
        }
      </div>
    `;
      })
      .join("");
  }

  function renderMatrix() {
    const filter = (state.lrSearch || "").trim().toLowerCase();
    const rowsWithIdx = state.matrixRows
      .map((row, idx) => ({ row, idx }))
      .filter(({ row }) => {
        if (!filter) return true;
        return `${row.author} ${row.goal} ${row.vars} ${row.method} ${row.finding}`.toLowerCase().includes(filter);
      });

    if (els.lrCountBadge) {
      const totalCorpus = Array.isArray(window.BUILTIN_LR_DATA) ? window.BUILTIN_LR_DATA.length : state.matrixRows.length;
      els.lrCountBadge.textContent = `${rowsWithIdx.length}/${state.matrixRows.length} dòng (Kho: ${totalCorpus})`;
    }

    els.matrixBody.innerHTML = rowsWithIdx
      .map(
        ({ row, idx }) => `
      <tr data-row="${idx}">
        <td><input type="text" data-field="author" value="${escapeAttr(row.author)}" /></td>
        <td><input type="text" data-field="goal" value="${escapeAttr(row.goal)}" /></td>
        <td><input type="text" data-field="vars" value="${escapeAttr(row.vars)}" /></td>
        <td><input type="text" data-field="method" value="${escapeAttr(row.method)}" /></td>
        <td><input type="text" data-field="finding" value="${escapeAttr(row.finding)}" /></td>
        <td><button type="button" class="btn-danger btn-del-row" data-row="${idx}">Xóa</button></td>
      </tr>
    `
      )
      .join("");
  }

  function renderVarFramework() {
    if (!els.varFrameworkBody) return;
    els.varFrameworkBody.innerHTML = state.varRows
      .map(
        (r, idx) => `
      <tr data-var-row="${idx}">
        <td><input type="text" data-var-field="meta" value="${escapeAttr(r.meta)}" /></td>
        <td><input type="text" data-var-field="yVar" value="${escapeAttr(r.yVar)}" /></td>
        <td><input type="text" data-var-field="xVar" value="${escapeAttr(r.xVar)}" /></td>
        <td><input type="text" data-var-field="medModVar" value="${escapeAttr(r.medModVar)}" /></td>
        <td><input type="text" data-var-field="methodScale" value="${escapeAttr(r.methodScale)}" /></td>
        <td><button type="button" class="btn-danger btn-del-var-row" data-var-row="${idx}">Xóa</button></td>
      </tr>
    `
      )
      .join("");
  }

  // Event listeners
  els.orientBtns.forEach((btn) => {
    btn.addEventListener("click", () => setOrientation(btn.dataset.orientation));
  });

  els.tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => setActiveTab(btn.dataset.tab));
  });

  els.presetSelect.addEventListener("change", (e) => {
    if (e.target.value) applyPresetById(e.target.value);
  });

  if (els.autoRunAllBtn) {
    els.autoRunAllBtn.addEventListener("click", runAll20Steps);
  }
  if (els.runAllStepsBtn) {
    els.runAllStepsBtn.addEventListener("click", runAll20Steps);
  }

  els.resetBtn.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    state.selectedPresetId = "";
    state.topic = "";
    state.rq = "";
    state.context = "";
    state.customInputText = "";
    state.steps20 = [...DEFAULT_STEPS_20];
    state.stepOutputs = {};
    state.lrSearch = "";
    state.matrixRows = getBuiltinLr().slice(0, 12);
    state.varRows = [buildVarRowFromCurrentState()];
    els.topicInput.value = "";
    els.rqInput.value = "";
    els.contextInput.value = "";
    els.customDataTextarea.value = "";
    els.lrSearchInput.value = "";
    els.autoPipelineOutput.hidden = true;
    setStepIngestStatus("Đã làm mới nguồn dữ liệu 20 bước.");
    renderPresetSelect();
    renderPrompts();
    renderSteps();
    renderMatrix();
    renderVarFramework();
    showToast("Đã làm mới trạng thái trên fbrh");
  });

  [els.topicInput, els.rqInput, els.contextInput].forEach((input) => {
    input.addEventListener("input", () => {
      state.topic = els.topicInput.value;
      state.rq = els.rqInput.value;
      state.context = els.contextInput.value;
      if (state.varRows.length > 0) {
        state.varRows[0] = buildVarRowFromCurrentState();
      }
      renderVarFramework();
      renderPrompts();
      saveState();
    });
  });

  if (els.customDataFile) {
    els.customDataFile.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) handleCustomFileUpload(file, false);
      e.target.value = "";
    });
  }

  if (els.stepSourceFile) {
    els.stepSourceFile.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) handleCustomFileUpload(file, true);
      e.target.value = "";
    });
  }

  if (els.fetchStepUrlBtn) {
    els.fetchStepUrlBtn.addEventListener("click", handleFetchFromUrl);
  }

  if (els.applyCustomInputBtn) {
    els.applyCustomInputBtn.addEventListener("click", () => {
      state.customInputText = els.customDataTextarea.value;
      renderPrompts();
      saveState();
      setStepIngestStatus("Đã áp dụng nội dung hiện tại vào 20 bước & Prompt.");
      showToast("Đã áp dụng dữ liệu vào 20 bước");
    });
  }

  if (els.syncGithubBtn) {
    els.syncGithubBtn.addEventListener("click", syncFromGithubResearchWorkflow);
  }
  if (els.syncGithubMatrixBtn) {
    els.syncGithubMatrixBtn.addEventListener("click", syncFromGithubResearchWorkflow);
  }
  if (els.autoPopulateMatrixBtn) {
    els.autoPopulateMatrixBtn.addEventListener("click", autoPopulateMatrixByTopic);
  }
  if (els.exportProjectBtn) {
    els.exportProjectBtn.addEventListener("click", exportProjectJson);
  }

  if (els.multiExportToggleBtn && els.multiExportPanel) {
    els.multiExportToggleBtn.addEventListener("click", () => {
      els.multiExportPanel.hidden = !els.multiExportPanel.hidden;
    });
  }

  if (els.runMultiExportBtn) {
    els.runMultiExportBtn.addEventListener("click", () => {
      const chosen = [];
      if (els.expOptWord && els.expOptWord.checked) chosen.push("word");
      if (els.expOptPdf && els.expOptPdf.checked) chosen.push("pdf");
      if (els.expOptTxt && els.expOptTxt.checked) chosen.push("txt");
      if (els.expOptMd && els.expOptMd.checked) chosen.push("md");
      if (els.expOptJson && els.expOptJson.checked) chosen.push("json");

      if (!chosen.length) {
        showToast("Hãy tick chọn ít nhất 1 định dạng trước khi tải");
        return;
      }

      const scope = (els.expScopeSelect && els.expScopeSelect.value) || "all";
      const payload = buildMultiExportPayload(scope);

      if (chosen.includes("word")) {
        saveExportBlob(formatMultiWordHtml(payload), `${payload.baseName}.doc`, "application/msword;charset=utf-8");
      }
      if (chosen.includes("txt")) {
        saveExportBlob(formatMultiTxt(payload), `${payload.baseName}.txt`, "text/plain;charset=utf-8");
      }
      if (chosen.includes("md")) {
        saveExportBlob(formatMultiMd(payload), `${payload.baseName}.md`, "text/markdown;charset=utf-8");
      }
      if (chosen.includes("json")) {
        saveExportBlob(JSON.stringify(payload.jsonObj, null, 2), `${payload.baseName}.json`, "application/json;charset=utf-8");
      }
      if (chosen.includes("pdf")) {
        openPdfPrintPreview(payload);
      }

      showToast(`Đã tải: ${chosen.map((c) => c.toUpperCase()).join(", ")}`);
    });
  }

  els.presetGrid.addEventListener("click", (e) => {
    const loadBtn = e.target.closest(".btn-load-preset");
    if (loadBtn) {
      applyPresetById(loadBtn.dataset.id);
      return;
    }
    const copyBtn = e.target.closest(".btn-copy-preset");
    if (copyBtn) {
      const item = (PRESETS[state.orientation] || []).find((p) => p.id === copyBtn.dataset.id);
      if (item) {
        const txt =
          `${item.title}\nĐề tài/Chủ đề: ${item.topic}\nRQ/Mục tiêu: ${item.rq}\n` +
          `Biến/Chỉ tiêu: ${item.variables}\nPhương pháp/Mô hình: ${item.method}\nTruy vấn: ${item.query}`;
        copyText(txt, item.title);
      }
    }
  });

  els.stepsList.addEventListener("input", (e) => {
    const editInp = e.target.closest("[data-step-edit]");
    if (!editInp) return;
    const idx = Number(editInp.dataset.stepEdit);
    if (!Number.isNaN(idx) && state.steps20[idx] !== undefined) {
      state.steps20[idx] = editInp.value;
      saveState();
    }
  });

  els.stepsList.addEventListener("click", (e) => {
    const runBtn = e.target.closest(".btn-run-step");
    if (runBtn) {
      const idx = Number(runBtn.dataset.index);
      if (!Number.isNaN(idx)) runSingleStep(idx);
      return;
    }
    const copyOutBtn = e.target.closest(".btn-copy-step-out");
    if (copyOutBtn) {
      const idx = Number(copyOutBtn.dataset.index);
      if (!Number.isNaN(idx) && state.stepOutputs[idx]) {
        copyText(state.stepOutputs[idx], `Kết quả Bước ${idx + 1}`);
      }
      return;
    }
    const copyBtn = e.target.closest(".btn-copy-step");
    if (copyBtn) {
      const idx = Number(copyBtn.dataset.index);
      if (!Number.isNaN(idx) && state.steps20[idx]) {
        copyText(`Bước ${idx + 1}: ${state.steps20[idx]}`, `Bước ${idx + 1}`);
      }
    }
  });

  els.copyAllStepsBtn.addEventListener("click", () => {
    const all = state.steps20.map((s, i) => `Bước ${i + 1}: ${s}`).join("\n");
    copyText(all, "Toàn bộ 20 bước");
  });

  els.promptsList.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-copy-prompt-key");
    if (!btn) return;
    const key = btn.dataset.copyKey;
    const label = btn.dataset.copyLabel || "Prompt";
    if (key && window.__PROMPT_COPY_MAP && window.__PROMPT_COPY_MAP[key]) {
      copyText(window.__PROMPT_COPY_MAP[key], label);
    }
  });

  if (els.lrSearchInput) {
    els.lrSearchInput.addEventListener("input", (e) => {
      state.lrSearch = e.target.value;
      renderMatrix();
    });
  }

  els.matrixBody.addEventListener("input", (e) => {
    const tr = e.target.closest("tr");
    const field = e.target.dataset.field;
    if (!tr || !field) return;
    const rowIdx = Number(tr.dataset.row);
    if (state.matrixRows[rowIdx]) {
      state.matrixRows[rowIdx][field] = e.target.value;
      saveState();
    }
  });

  els.matrixBody.addEventListener("click", (e) => {
    const delBtn = e.target.closest(".btn-del-row");
    if (!delBtn) return;
    const rowIdx = Number(delBtn.dataset.row);
    if (!Number.isNaN(rowIdx) && state.matrixRows.length > 1) {
      state.matrixRows.splice(rowIdx, 1);
      renderMatrix();
      saveState();
      showToast("Đã xóa dòng");
    }
  });

  els.addRowBtn.addEventListener("click", () => {
    state.matrixRows.push({ author: "", goal: "", vars: "", method: "", finding: "" });
    renderMatrix();
    saveState();
  });

  els.copyMatrixBtn.addEventListener("click", () => {
    const header = [
      "Tác giả (Năm)",
      "Mục tiêu / Bối cảnh / Nguồn",
      "Biến / Chỉ tiêu chính",
      "Phương pháp / Công cụ",
      "Kết quả & Khoảng trống / Ứng dụng"
    ].join("\t");
    const lines = state.matrixRows.map((r) =>
      [r.author, r.goal, r.vars, r.method, r.finding]
        .map((v) => String(v || "").replace(/\t|\n/g, " "))
        .join("\t")
    );
    copyText([header, ...lines].join("\n"), "Bảng LR Matrix");
  });

  if (els.exportMatrixExcelBtn) {
    els.exportMatrixExcelBtn.addEventListener("click", () => {
      const headers = [
        "Tác giả (Năm)",
        "Mục tiêu / Bối cảnh / Nguồn",
        "Biến / Chỉ tiêu chính",
        "Phương pháp / Công cụ",
        "Kết quả & Khoảng trống / Ứng dụng"
      ];
      const rows = state.matrixRows.map((r) => [r.author, r.goal, r.vars, r.method, r.finding]);
      exportRowsToExcel(headers, rows, "FBRH_LR_Matrix.xlsx", "LR_Matrix");
    });
  }

  if (els.rebuildVarTableBtn) {
    els.rebuildVarTableBtn.addEventListener("click", () => {
      rebuildVarRowsFromTopic();
      showToast("Đã tự động điền Khung biến từ đề tài");
    });
  }

  if (els.addVarRowBtn) {
    els.addVarRowBtn.addEventListener("click", () => {
      state.varRows.push({ meta: "", yVar: "", xVar: "", medModVar: "", methodScale: "" });
      renderVarFramework();
      saveState();
    });
  }

  if (els.copyVarTableBtn) {
    els.copyVarTableBtn.addEventListener("click", () => {
      const header = [
        "Đề tài / RQ / Bối cảnh",
        "Biến phụ thuộc / Chỉ tiêu đầu ra (Y)",
        "Biến độc lập / Nhân tố tác động (X)",
        "Trung gian / Điều tiết / Kiểm soát (Med/Mod/Controls)",
        "Phương pháp & Thang đo gợi ý"
      ].join("\t");
      const lines = state.varRows.map((r) =>
        [r.meta, r.yVar, r.xVar, r.medModVar, r.methodScale]
          .map((v) => String(v || "").replace(/\t|\n/g, " "))
          .join("\t")
      );
      copyText([header, ...lines].join("\n"), "Khung biến / Chỉ tiêu");
    });
  }

  if (els.exportVarExcelBtn) {
    els.exportVarExcelBtn.addEventListener("click", () => {
      const headers = [
        "Đề tài / RQ / Bối cảnh",
        "Biến phụ thuộc / Chỉ tiêu đầu ra (Y)",
        "Biến độc lập / Nhân tố tác động (X)",
        "Trung gian / Điều tiết / Kiểm soát (Med/Mod/Controls)",
        "Phương pháp & Thang đo gợi ý"
      ];
      const rows = state.varRows.map((r) => [r.meta, r.yVar, r.xVar, r.medModVar, r.methodScale]);
      exportRowsToExcel(headers, rows, "FBRH_Khung_Bien_Chi_Tieu.xlsx", "Khung_Bien");
    });
  }

  if (els.varFrameworkBody) {
    els.varFrameworkBody.addEventListener("input", (e) => {
      const tr = e.target.closest("tr");
      const field = e.target.dataset.varField;
      if (!tr || !field) return;
      const rowIdx = Number(tr.dataset.varRow);
      if (state.varRows[rowIdx]) {
        state.varRows[rowIdx][field] = e.target.value;
        saveState();
      }
    });

    els.varFrameworkBody.addEventListener("click", (e) => {
      const delBtn = e.target.closest(".btn-del-var-row");
      if (!delBtn) return;
      const rowIdx = Number(delBtn.dataset.varRow);
      if (!Number.isNaN(rowIdx) && state.varRows.length > 1) {
        state.varRows.splice(rowIdx, 1);
        renderVarFramework();
        saveState();
        showToast("Đã xóa dòng khung biến");
      }
    });
  }

  // Boot sequence
  loadSavedState();
  els.topicInput.value = state.topic;
  els.rqInput.value = state.rq;
  els.contextInput.value = state.context;
  els.customDataTextarea.value = state.customInputText;
  els.lrSearchInput.value = state.lrSearch;
  if (els.lrStatsText) {
    const totalCorpus = Array.isArray(window.BUILTIN_LR_DATA) ? window.BUILTIN_LR_DATA.length : state.matrixRows.length;
    els.lrStatsText.textContent = `Đã tích hợp ${totalCorpus} công trình từ tệp nguồn & hỗ trợ kéo dữ liệu từ longtr99/research-workflow vào fbrh (${state.githubStatus})`;
  }

  setOrientation(state.orientation);
  renderSteps();
  renderPrompts();
  renderMatrix();
  renderVarFramework();
  setActiveTab(state.activeTab);
})();
