(function () {
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
    ]
  };

  const STEPS_20 = [
    "Xác định rõ định hướng (Nghiên cứu hàn lâm hay Ứng dụng thực tiễn) và phạm vi chuyên ngành Tài chính – Ngân hàng.",
    "Chọn chủ đề trọng tâm có tính thời sự và khả năng tiếp cận dữ liệu/tài liệu thực tế.",
    "Rà soát bức tranh tổng quan tài liệu (Literature Review) sơ bộ trên Scopus, Google Scholar hoặc nguồn nghiệp vụ.",
    "Nhận diện khoảng trống nghiên cứu (Research Gap) hoặc bài toán/điểm nghẽn thực tế cần giải quyết.",
    "Xác định mục tiêu tổng quát và các mục tiêu cụ thể đo lường được.",
    "Đặt câu hỏi nghiên cứu (RQ) hoặc câu hỏi bài toán ứng dụng rõ ràng, không mơ hồ.",
    "Xây dựng khung lý thuyết nền (định hướng Nghiên cứu) hoặc khung tiêu chí/nghiệp vụ (định hướng Ứng dụng).",
    "Phát triển hệ thống giả thuyết nghiên cứu hoặc giả định mô hình/kịch bản thực hiện.",
    "Liệt kê đầy đủ biến phụ thuộc, biến độc lập, biến trung gian/điều tiết và biến kiểm soát (hoặc chỉ tiêu/đầu vào/đầu ra).",
    "Định nghĩa rõ công thức tính, đơn vị đo và nguồn dữ liệu cho từng biến/chỉ tiêu.",
    "Thiết kế chiến lược thu thập dữ liệu, khung thời gian/mẫu quan sát và quy tắc làm sạch dữ liệu.",
    "Xử lý giá trị thiếu, ngoại lai, sai lệch đơn vị và kiểm tra tính nhất quán của bộ dữ liệu.",
    "Lựa chọn phương pháp định lượng/kinh tế lượng hoặc mô hình phân tích/chấm điểm/định giá phù hợp.",
    "Kiểm định các giả định mô hình, tính nội sinh, độ bền vững (robustness) hoặc kiểm tra kịch bản/độ nhạy.",
    "Chạy mô hình, trích xuất bảng kết quả, biểu đồ và chỉ số đánh giá chính xác.",
    "Diễn giải kết quả gắn với lý thuyết kinh tế tài chính hoặc bối cảnh vận hành thực tế.",
    "Đối chiếu kết quả với các nghiên cứu trước hoặc chuẩn mực/thông lệ ngành.",
    "Rút ra hàm ý chính sách, hàm ý quản trị hoặc khuyến nghị triển khai cụ thể, khả thi.",
    "Chỉ ra hạn chế của nghiên cứu/mô hình và hướng phát triển tiếp theo.",
    "Chuẩn hóa trình bày, bảng biểu, trích dẫn tài liệu và rà soát toàn bộ tính logic trước khi nộp."
  ];

  const state = {
    orientation: "research",
    activeTab: "library",
    topic: "",
    rq: "",
    context: "",
    matrixRows: [
      {
        author: "Tác giả A (2023)",
        goal: "Đánh giá tác động của yếu tố tài chính/quản trị đến rủi ro hoặc hiệu quả",
        vars: "Y: ROA / NPL | X: biến độc lập chính | Controls: quy mô, đòn bẩy",
        method: "Panel FE / System GMM",
        finding: "Có tác động đáng kể; khoảng trống: chưa kiểm định cơ chế trung gian hoặc giai đoạn hậu 2022."
      },
      {
        author: "Tác giả B (2024)",
        goal: "Phân tích mô hình dự báo / chấm điểm / tối ưu danh mục trong TCNH",
        vars: "Chỉ tiêu thanh khoản, đòn bẩy, rủi ro tín dụng/thị trường",
        method: "Logit / Stress test / Tối ưu danh mục",
        finding: "Độ chính xác cải thiện; cần kiểm chứng thêm trên dữ liệu/bối cảnh Việt Nam."
      }
    ]
  };

  const els = {
    orientBtns: Array.from(document.querySelectorAll(".orient-btn")),
    tabBtns: Array.from(document.querySelectorAll(".tab-btn")),
    tabPanels: Array.from(document.querySelectorAll(".tab-panel")),
    presetSelect: document.getElementById("presetSelect"),
    resetBtn: document.getElementById("resetBtn"),
    topicInput: document.getElementById("topicInput"),
    rqInput: document.getElementById("rqInput"),
    contextInput: document.getElementById("contextInput"),
    libraryTitle: document.getElementById("libraryTitle"),
    libraryDesc: document.getElementById("libraryDesc"),
    orientationPill: document.getElementById("orientationPill"),
    presetGrid: document.getElementById("presetGrid"),
    stepsList: document.getElementById("stepsList"),
    copyAllStepsBtn: document.getElementById("copyAllStepsBtn"),
    promptsList: document.getElementById("promptsList"),
    matrixBody: document.getElementById("matrixBody"),
    addRowBtn: document.getElementById("addRowBtn"),
    copyMatrixBtn: document.getElementById("copyMatrixBtn"),
    toast: document.getElementById("toast")
  };

  function showToast(msg) {
    if (!els.toast) return;
    els.toast.textContent = msg || "Đã copy";
    els.toast.classList.add("show");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => {
      els.toast.classList.remove("show");
    }, 1800);
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
  }

  function setOrientation(orient) {
    if (!PRESETS[orient]) return;
    state.orientation = orient;
    els.orientBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.orientation === orient);
    });

    const isResearch = orient === "research";
    els.orientationPill.textContent = isResearch ? "Đang chọn: Nghiên cứu" : "Đang chọn: Ứng dụng";
    els.libraryTitle.textContent = isResearch
      ? "Thư viện 6 Hướng nghiên cứu chuyên ngành Tài chính – Ngân hàng (Chọn & Nạp 1 chạm)"
      : "Thư viện 6 Hướng ứng dụng chuyên ngành Tài chính – Ngân hàng (Chọn & Nạp 1 chạm)";
    els.libraryDesc.textContent = isResearch
      ? "Tập trung khoảng trống nghiên cứu, biến số, mô hình kinh tế lượng, kiểm định giả thuyết và truy vấn Scopus."
      : "Tập trung bài toán thực tế, bộ chỉ tiêu/mô hình chấm điểm – định giá – quản trị rủi ro và kịch bản triển khai.";

    els.topicInput.placeholder = isResearch
      ? "Tên đề tài / Mô hình nghiên cứu..."
      : "Tên bài toán / Mô hình ứng dụng thực tế...";
    els.rqInput.placeholder = isResearch
      ? "Câu hỏi nghiên cứu (RQ)..."
      : "Mục tiêu / Bài toán trọng tâm cần giải quyết...";
    els.contextInput.placeholder = isResearch
      ? "Mô tả vấn đề / Bối cảnh / Dữ liệu bảng..."
      : "Bối cảnh doanh nghiệp/ngân hàng / Dữ liệu đầu vào...";

    renderPresetSelect();
    renderPresetGrid();
    renderPrompts();
  }

  function renderPresetSelect() {
    const items = PRESETS[state.orientation] || [];
    els.presetSelect.innerHTML =
      `<option value="">-- Nạp nhanh (${state.orientation === "research" ? "Nghiên cứu" : "Ứng dụng"}) --</option>` +
      items.map((p) => `<option value="${p.id}">${p.title}</option>`).join("");
  }

  function applyPresetById(id) {
    const items = PRESETS[state.orientation] || [];
    const found = items.find((p) => p.id === id);
    if (!found) return;
    state.topic = found.topic;
    state.rq = found.rq;
    state.context = found.context;
    els.topicInput.value = state.topic;
    els.rqInput.value = state.rq;
    els.contextInput.value = state.context;
    els.presetSelect.value = found.id;
    renderPrompts();
    showToast(`Đã nạp: ${found.title}`);
  }

  function renderPresetGrid() {
    const items = PRESETS[state.orientation] || [];
    els.presetGrid.innerHTML = items
      .map(
        (p) => `
      <article class="preset-card">
        <div>
          <h3>${p.title}</h3>
          <p class="preset-meta"><strong>RQ / Trọng tâm:</strong> ${p.rq}</p>
          <div class="preset-detail">
            <p><strong>Biến / Chỉ tiêu:</strong> ${p.variables}</p>
            <p><strong>Phương pháp / Mô hình:</strong> ${p.method}</p>
            <p><strong>Truy vấn tham khảo:</strong> ${p.query}</p>
          </div>
        </div>
        <div class="card-actions">
          <button type="button" class="btn-primary btn-load-preset" data-id="${p.id}">Nạp vào Workbench</button>
          <button type="button" class="btn-secondary btn-copy-preset" data-id="${p.id}">Copy thông tin</button>
        </div>
      </article>
    `
      )
      .join("");
  }

  function renderSteps() {
    els.stepsList.innerHTML = STEPS_20.map(
      (step, idx) => `
      <div class="item-box">
        <div class="item-top">
          <span class="item-title">Bước ${idx + 1}</span>
          <button type="button" class="btn-copy btn-copy-step" data-index="${idx}">Copy</button>
        </div>
        <div>${step}</div>
      </div>
    `
    ).join("");
  }

  function buildPrompts() {
    const topic = state.topic.trim() || "[Chưa nhập tên đề tài / bài toán TCNH]";
    const rq = state.rq.trim() || "[Chưa nhập câu hỏi nghiên cứu / mục tiêu chính]";
    const ctx = state.context.trim() || "[Chưa nhập bối cảnh / dữ liệu]";
    const modeLabel = state.orientation === "research" ? "Định hướng Nghiên cứu" : "Định hướng Ứng dụng";

    return [
      {
        title: `Prompt 1 — Khung đề cương & cấu trúc (${modeLabel})`,
        body:
          `Bạn là cố vấn học thuật & chuyên gia Tài chính – Ngân hàng (${modeLabel}).\n` +
          `Đề tài / Bài toán: ${topic}\n` +
          `Câu hỏi / Mục tiêu trọng tâm: ${rq}\n` +
          `Bối cảnh & Dữ liệu: ${ctx}\n\n` +
          `Hãy đề xuất:\n` +
          `1. Khoảng trống nghiên cứu hoặc điểm nghẽn thực tế cần giải quyết.\n` +
          `2. Khung đề cương chi tiết từng chương/mục.\n` +
          `3. Bảng biến/chỉ tiêu (tên biến, ký hiệu, cách đo lường, kỳ vọng dấu/tác động).\n` +
          `4. Phương pháp phân tích/kiểm định hoặc quy trình triển khai phù hợp.`
      },
      {
        title: "Prompt 2 — Tổng hợp tài liệu & LR Matrix cho NotebookLM / ChatGPT",
        body:
          `Dựa trên các tài liệu đã nạp cho chủ đề: "${topic}" (${modeLabel}), hãy lập bảng tổng hợp gồm các cột:\n` +
          `Tác giả (Năm) | Bối cảnh & Dữ liệu | Mô hình / Phương pháp | Biến/Chỉ tiêu chính | Kết quả chính | Hạn chế / Khoảng trống.\n` +
          `Sau đó chỉ ra 3 điểm đồng thuận và 3 điểm còn tranh luận hoặc chưa được khai thác sâu.`
      },
      {
        title: "Prompt 3 — Rà soát logic, rủi ro phương pháp & cách bảo vệ",
        body:
          `Hãy đóng vai hội đồng phản biện khắt khe cho đề tài/bài toán:\n` +
          `- Tên: ${topic}\n` +
          `- RQ / Mục tiêu: ${rq}\n` +
          `- Bối cảnh: ${ctx}\n\n` +
          `Chỉ ra 5 điểm dễ bị chất vấn nhất về dữ liệu, phương pháp, tính hợp lệ hoặc tính khả thi ứng dụng, kèm cách xử lý và câu trả lời bảo vệ ngắn gọn.`
      }
    ];
  }

  function renderPrompts() {
    const prompts = buildPrompts();
    els.promptsList.innerHTML = prompts
      .map(
        (pr, idx) => `
      <div class="item-box">
        <div class="item-top">
          <span class="item-title">${pr.title}</span>
          <button type="button" class="btn-copy btn-copy-prompt" data-prompt-idx="${idx}">Copy prompt</button>
        </div>
        <pre class="prompt-pre">${pr.body}</pre>
      </div>
    `
      )
      .join("");
  }

  function renderMatrix() {
    els.matrixBody.innerHTML = state.matrixRows
      .map(
        (row, idx) => `
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

  function escapeAttr(val) {
    return String(val || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }

  els.orientBtns.forEach((btn) => {
    btn.addEventListener("click", () => setOrientation(btn.dataset.orientation));
  });

  els.tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => setActiveTab(btn.dataset.tab));
  });

  els.presetSelect.addEventListener("change", (e) => {
    if (e.target.value) {
      applyPresetById(e.target.value);
    }
  });

  els.resetBtn.addEventListener("click", () => {
    state.topic = "";
    state.rq = "";
    state.context = "";
    els.topicInput.value = "";
    els.rqInput.value = "";
    els.contextInput.value = "";
    els.presetSelect.value = "";
    renderPrompts();
    showToast("Đã làm mới ô nhập");
  });

  [els.topicInput, els.rqInput, els.contextInput].forEach((input) => {
    input.addEventListener("input", () => {
      state.topic = els.topicInput.value;
      state.rq = els.rqInput.value;
      state.context = els.contextInput.value;
      renderPrompts();
    });
  });

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
          `${item.title}\n` +
          `Đề tài/Bài toán: ${item.topic}\n` +
          `RQ/Mục tiêu: ${item.rq}\n` +
          `Biến/Chỉ tiêu: ${item.variables}\n` +
          `Phương pháp/Mô hình: ${item.method}\n` +
          `Truy vấn: ${item.query}`;
        copyText(txt, item.title);
      }
    }
  });

  els.stepsList.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-copy-step");
    if (!btn) return;
    const idx = Number(btn.dataset.index);
    if (!Number.isNaN(idx) && STEPS_20[idx]) {
      copyText(`Bước ${idx + 1}: ${STEPS_20[idx]}`, `Bước ${idx + 1}`);
    }
  });

  els.copyAllStepsBtn.addEventListener("click", () => {
    const all = STEPS_20.map((s, i) => `Bước ${i + 1}: ${s}`).join("\n");
    copyText(all, "Toàn bộ 20 bước");
  });

  els.promptsList.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-copy-prompt");
    if (!btn) return;
    const idx = Number(btn.dataset.promptIdx);
    const prompts = buildPrompts();
    if (!Number.isNaN(idx) && prompts[idx]) {
      copyText(prompts[idx].body, prompts[idx].title);
    }
  });

  els.matrixBody.addEventListener("input", (e) => {
    const tr = e.target.closest("tr");
    const field = e.target.dataset.field;
    if (!tr || !field) return;
    const rowIdx = Number(tr.dataset.row);
    if (state.matrixRows[rowIdx]) {
      state.matrixRows[rowIdx][field] = e.target.value;
    }
  });

  els.matrixBody.addEventListener("click", (e) => {
    const delBtn = e.target.closest(".btn-del-row");
    if (!delBtn) return;
    const rowIdx = Number(delBtn.dataset.row);
    if (!Number.isNaN(rowIdx) && state.matrixRows.length > 1) {
      state.matrixRows.splice(rowIdx, 1);
      renderMatrix();
      showToast("Đã xóa dòng");
    }
  });

  els.addRowBtn.addEventListener("click", () => {
    state.matrixRows.push({
      author: "",
      goal: "",
      vars: "",
      method: "",
      finding: ""
    });
    renderMatrix();
  });

  els.copyMatrixBtn.addEventListener("click", () => {
    const header = [
      "Tác giả (Năm)",
      "Mục tiêu / Bối cảnh",
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

  setOrientation("research");
  renderSteps();
  renderMatrix();
  setActiveTab("library");
})();
