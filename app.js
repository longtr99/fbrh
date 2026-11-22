const DATA = {
  "financeTracks": [
    {
      "id": "track-credit-risk",
      "shortName": "1. Rủi ro tín dụng & Ổn định ngân hàng",
      "topicTitle": "Mối liên hệ giữa đa dạng hóa thu nhập, cạnh tranh ngân hàng và rủi ro tín dụng tại các ngân hàng thương mại Việt Nam",
      "rq": "Đa dạng hóa thu nhập và mức độ cạnh tranh thị trường có mối liên hệ như thế nào với rủi ro tín dụng và sự ổn định của các ngân hàng thương mại Việt Nam?",
      "problem": "Trong bối cảnh biên lãi thuần (NIM) thu hẹp và biến động kinh tế vĩ mô, các ngân hàng thương mại đẩy mạnh thu nhập ngoài lãi và cạnh tranh thị phần. Tuy nhiên, bằng chứng thực nghiệm về việc đa dạng hóa làm giảm hay làm tăng rủi ro nợ xấu (NPL) và rủi ro phá sản (Z-score) còn trái chiều.",
      "dataType": "Dữ liệu bảng thứ cấp (Panel Data) BCTC kiểm toán các NHTM giai đoạn 2012–2025 + dữ liệu vĩ mô (WB/GSO/SBV).",
      "theories": [
        "Modern Portfolio Theory (Markowitz, 1952) — cơ chế phân tán rủi ro qua thu nhập ngoài lãi.",
        "Competition-Fragility vs. Competition-Stability Hypothesis (Keeley, 1990; Boyd & De Nicoló, 2005).",
        "Moral Hazard & Agency Theory (Jensen & Meckling, 1976) — rủi ro đạo đức khi giám sát tín dụng lỏng lẻo."
      ],
      "variables": {
        "dependent": [
          "NPL (Tỷ lệ nợ xấu / Tổng dư nợ)",
          "LLP (Dự phòng rủi ro tín dụng / Tổng dư nợ)",
          "Z-score (Chỉ số ổn định tài chính ngân hàng: (ROA + EQ/TA) / σ(ROA))"
        ],
        "independent": [
          "NONII (Tỷ trọng thu nhập ngoài lãi / Tổng thu nhập hoạt động)",
          "HHI_INC (Chỉ số Herfindahl đa dạng hóa cơ cấu thu nhập)",
          "Lerner Index hoặc Boone Indicator (Mức độ cạnh tranh / sức mạnh thị trường)"
        ],
        "mediator_moderator": [
          "Điều tiết: Quy mô ngân hàng (SIZE), Tỷ lệ an toàn vốn (CAR), Chất lượng quản trị (HĐQT độc lập / Sở hữu nước ngoài)"
        ],
        "controls": [
          "SIZE (ln Tổng tài sản), LDR (Dư nợ/Huy động), ETA (Vốn chủ/Tổng tài sản), Tăng trưởng tín dụng (LGR), Tăng trưởng GDP, Lạm phát (INF)"
        ]
      },
      "methods": "Panel Regression (FEM/REM), Two-step System GMM (Arellano-Bond) xử lý nội sinh & biến trễ rủi ro tín dụng; kiểm định vững với biến đại diện rủi ro thay thế (NPL vs. Z-score).",
      "scopusQueries": [
        {
          "label": "Scopus – Đa dạng hóa thu nhập & Rủi ro ngân hàng",
          "query": "TITLE-ABS-KEY((\"income diversification\" OR \"non-interest income\" OR \"revenue diversification\") AND (\"credit risk\" OR \"non-performing loan*\" OR \"bank stability\" OR \"Z-score\") AND (\"commercial bank*\" OR banking)) AND DOCTYPE(ar)"
        },
        {
          "label": "Scopus – Cạnh tranh ngân hàng & Ổn định tài chính",
          "query": "TITLE-ABS-KEY((\"bank competition\" OR \"Lerner index\" OR \"market power\") AND (\"credit risk\" OR \"bank stability\" OR \"financial stability\") AND (\"emerging market*\" OR Vietnam OR ASEAN)) AND DOCTYPE(ar)"
        }
      ]
    },
    {
      "id": "track-fintech-digital",
      "shortName": "2. Ngân hàng số, Fintech & AI trong tài chính",
      "topicTitle": "Tác động của chuyển đổi số và sự phát triển Fintech đến hiệu quả hoạt động và khả năng chịu đựng rủi ro của ngân hàng thương mại",
      "rq": "Mức độ chuyển đổi số ngân hàng và áp lực cạnh tranh từ Fintech có mối liên hệ như thế nào với hiệu quả sinh lời và rủi ro hoạt động của các ngân hàng thương mại?",
      "problem": "Các ngân hàng đầu tư mạnh vào ngân hàng số, Open Banking và AI trong chấm điểm tín dụng nhằm tối ưu chi phí (CIR) và mở rộng tệp khách hàng, đồng thời đối mặt cạnh tranh từ các công ty Fintech và rủi ro công nghệ.",
      "dataType": "Dữ liệu bảng NHTM (chỉ số chuyển đổi số từ phân tích văn bản BCTN/Text mining + BCTC) hoặc khảo sát định lượng khách hàng/nhân sự ngân hàng.",
      "theories": [
        "Disruptive Innovation Theory (Christensen, 1997) — tác động phá vỡ và hợp tác Fintech – Ngân hàng.",
        "Resource-Based View (RBV — Barney, 1991) — năng lực số là nguồn lực tạo lợi thế cạnh tranh bền vững.",
        "UTAUT2 / TAM (nếu hướng khảo sát hành vi chấp nhận ngân hàng số của khách hàng)."
      ],
      "variables": {
        "dependent": [
          "ROA, ROE, NIM (Hiệu quả tài chính ngân hàng)",
          "CIR (Cost-to-Income Ratio — Hiệu quả chi phí vận hành)",
          "Z-score / Rủi ro thanh khoản (LCR, NSFR)"
        ],
        "independent": [
          "DTI (Digital Transformation Index — chỉ số tần suất từ khóa số hóa trong BCTN)",
          "FINTECH (Chỉ số phát triển Fintech khu vực / số lượng công ty Fintech / đầu tư CNTT)"
        ],
        "mediator_moderator": [
          "Trung gian: Hiệu quả chi phí (CIR) hoặc Tăng trưởng tiền gửi không kỳ hạn (CASA)",
          "Điều tiết: Quy mô ngân hàng (SIZE), Tỷ lệ an toàn vốn (CAR)"
        ],
        "controls": [
          "SIZE, ETA, LDR, Tỷ lệ chi phí hoạt động, Tăng trưởng GDP, Lạm phát"
        ]
      },
      "methods": "Text Mining xây dựng chỉ số số hóa + Panel Fixed Effects / System GMM / Difference-in-Differences (DID); hoặc PLS-SEM / CB-SEM (nếu khảo sát bảng hỏi hành vi người dùng).",
      "scopusQueries": [
        {
          "label": "Scopus – Chuyển đổi số ngân hàng & Hiệu quả / Rủi ro",
          "query": "TITLE-ABS-KEY((\"digital transformation\" OR \"digital banking\" OR digitalization) AND (\"bank performance\" OR \"bank efficiency\" OR \"bank risk\" OR profitability) AND (\"commercial bank*\" OR banking)) AND DOCTYPE(ar)"
        },
        {
          "label": "Scopus – Fintech & Cạnh tranh / Ổn định ngân hàng",
          "query": "TITLE-ABS-KEY((Fintech OR \"financial technology\") AND (\"bank stability\" OR \"bank performance\" OR \"credit risk\" OR \"commercial bank*\")) AND PUBYEAR > 2018 AND DOCTYPE(ar)"
        }
      ]
    },
    {
      "id": "track-esg-green",
      "shortName": "3. ESG, Tài chính xanh & Rủi ro khí hậu",
      "topicTitle": "Mối liên hệ giữa thực hành ESG, tín dụng xanh với chi phí vốn và giá trị doanh nghiệp niêm yết / ngân hàng thương mại",
      "rq": "Thực hành ESG và công bố thông tin phát triển bền vững có mối liên hệ như thế nào với chi phí sử dụng vốn và hiệu quả tài chính của doanh nghiệp niêm yết tại Việt Nam?",
      "problem": "Áp lực từ nhà đầu tư tổ chức, quy định công bố thông tin bền vững và cơ chế chuyển dịch xanh khiến ESG trở thành trọng tâm. Tuy nhiên, chi phí tuân thủ ESG ngắn hạn có thể xung đột với lợi ích dài hạn về giảm chi phí nợ và tăng định giá thị trường.",
      "dataType": "Dữ liệu bảng doanh nghiệp phi tài chính niêm yết (HOSE/HNX) hoặc NHTM giai đoạn 2016–2025 (điểm ESG từ Refinitiv/FiinPro/chấm điểm BCTN).",
      "theories": [
        "Stakeholder Theory (Freeman, 1984) — đáp ứng kỳ vọng các bên liên quan giúp giảm rủi ro và tăng giá trị.",
        "Signaling Theory (Spence, 1973) — công bố ESG phát tín hiệu minh bạch giảm bất cân xứng thông tin.",
        "Legitimacy Theory (Suchman, 1995) — duy trì tính chính danh xã hội và môi trường."
      ],
      "variables": {
        "dependent": [
          "Tobin's Q / MTB (Giá trị thị trường doanh nghiệp)",
          "Cost of Debt (Kd = Chi phí lãi vay / Tổng nợ vay) & Cost of Equity (Ke)",
          "ROA / ROE (Hiệu quả hoạt động)"
        ],
        "independent": [
          "ESG_SCORE (Điểm tổng hợp Môi trường – Xã hội – Quản trị & từng trụ cột E, S, G)",
          "GREEN_CREDIT (Tỷ trọng dư nợ tín dụng xanh / Tổng dư nợ — đối với mẫu ngân hàng)"
        ],
        "mediator_moderator": [
          "Trung gian: Hạn chế tài chính (Financial Constraints — KZ Index / WW Index) hoặc Rủi ro vỡ nợ (Altman Z''-score)",
          "Điều tiết: Sở hữu nước ngoài (FOWN), Quy mô HĐQT / Chất lượng kiểm toán (Big4)"
        ],
        "controls": [
          "SIZE (ln Tổng tài sản), LEV (Tổng nợ/Tổng tài sản), TANG (Tài sản cố định hữu hình/Tổng tài sản), GROWTH (Tăng trưởng doanh thu), AGE (Số năm niêm yết)"
        ]
      },
      "methods": "Panel Regression (FEM/REM), Two-stage Least Squares (2SLS / IV) hoặc Propensity Score Matching (PSM) kiểm soát thiên lệch tự chọn (self-selection bias).",
      "scopusQueries": [
        {
          "label": "Scopus – ESG, Chi phí vốn & Giá trị doanh nghiệp",
          "query": "TITLE-ABS-KEY((ESG OR \"environmental, social and governance\" OR \"sustainability disclosure\") AND (\"firm value\" OR \"Tobin's Q\" OR \"cost of capital\" OR \"cost of debt\") AND (\"emerging market*\" OR Vietnam OR ASEAN)) AND DOCTYPE(ar)"
        },
        {
          "label": "Scopus – Tín dụng xanh & Hiệu quả ngân hàng",
          "query": "TITLE-ABS-KEY((\"green credit\" OR \"green finance\" OR \"green lending\") AND (\"bank performance\" OR \"credit risk\" OR profitability OR \"commercial bank*\")) AND DOCTYPE(ar)"
        }
      ]
    },
    {
      "id": "track-corp-fin-gov",
      "shortName": "4. Tài chính doanh nghiệp, Cấu trúc vốn & Quản trị công ty",
      "topicTitle": "Cơ cấu sở hữu, đặc điểm hội đồng quản trị và tốc độ điều chỉnh cấu trúc vốn của doanh nghiệp niêm yết Việt Nam",
      "rq": "Đặc điểm quản trị công ty và mức độ bất cân xứng thông tin ảnh hưởng như thế nào đến quyết định cấu trúc vốn và chính sách cổ tức của các doanh nghiệp niêm yết?",
      "problem": "Doanh nghiệp niêm yết tại thị trường mới nổi thường có mức độ tập trung sở hữu cao và hạn chế tiếp cận vốn dài hạn, làm thay đổi chi phí đại diện và tốc độ điều chỉnh về cấu trúc vốn mục tiêu.",
      "dataType": "Dữ liệu bảng BCTC và dữ liệu quản trị công ty (BCTN) của các doanh nghiệp phi tài chính niêm yết HOSE/HNX (2015–2025).",
      "theories": [
        "Trade-off Theory (Modigliani & Miller, 1963; Kraus & Litzenberger, 1973) — đánh đổi lá chắn thuế và chi phí kiệt quệ tài chính.",
        "Pecking Order Theory (Myers & Majluf, 1984) — trật tự phân hạng nguồn tài trợ do bất cân xứng thông tin.",
        "Agency Theory (Jensen & Meckling, 1976) — xung đột cổ đông – nhà quản lý và cổ đông lớn – cổ đông nhỏ."
      ],
      "variables": {
        "dependent": [
          "LEV (Tổng nợ/Tổng tài sản, Nợ dài hạn/Tổng tài sản, Nợ ngắn hạn/Tổng tài sản)",
          "DIV (Tỷ lệ chi trả cổ tức / Tỷ suất cổ tức)",
          "INV_EFF (Hiệu quả đầu tư — phần dư mô hình đầu tư Richardson, 2006)"
        ],
        "independent": [
          "B_IND (Tỷ lệ thành viên HĐQT độc lập), B_SIZE (Quy mô HĐQT), DUAL (Kiêm nhiệm Chủ tịch – CEO)",
          "OWN_CON (Tỷ lệ sở hữu cổ đông lớn), INST_OWN (Sở hữu tổ chức), FOR_OWN (Sở hữu nước ngoài)"
        ],
        "mediator_moderator": [
          "Điều tiết: Bất ổn chính sách kinh tế (EPU) hoặc Mức độ bất cân xứng thông tin (Bid-Ask spread / sai số dự báo)"
        ],
        "controls": [
          "SIZE, PROF (ROA), TANG (Tài sản hữu hình), MTB (Cơ hội tăng trưởng), NDTS (Lá chắn thuế phi nợ), LIQ (Thanh khoản)"
        ]
      },
      "methods": "Mô hình điều chỉnh từng phần (Partial Adjustment Model) ước lượng bằng System GMM; hồi quy phân vị (Quantile Regression) cho các mức đòn bẩy khác nhau.",
      "scopusQueries": [
        {
          "label": "Scopus – Quản trị công ty & Cấu trúc vốn / Tốc độ điều chỉnh",
          "query": "TITLE-ABS-KEY((\"corporate governance\" OR \"board independence\" OR \"ownership structure\") AND (\"capital structure\" OR \"leverage\" OR \"speed of adjustment\") AND (\"emerging market*\" OR Vietnam)) AND DOCTYPE(ar)"
        },
        {
          "label": "Scopus – Hiệu quả đầu tư & Bất cân xứng thông tin",
          "query": "TITLE-ABS-KEY((\"investment efficiency\" OR overinvestment OR underinvestment) AND (\"corporate governance\" OR \"financial reporting quality\" OR \"information asymmetry\")) AND DOCTYPE(ar)"
        }
      ]
    },
    {
      "id": "track-asset-pricing",
      "shortName": "5. Định giá tài sản, Thanh khoản & Biến động thị trường",
      "topicTitle": "Rủi ro thanh khoản, tâm lý nhà đầu tư và tỷ suất sinh lời cổ phiếu trên thị trường chứng khoán Việt Nam",
      "rq": "Rủi ro thanh khoản hệ thống và tâm lý nhà đầu tư cá nhân có vai trò định giá như thế nào đối với tỷ suất sinh lời kỳ vọng và biến động giá cổ phiếu trên sàn HOSE?",
      "problem": "Thị trường chứng khoán Việt Nam có tỷ trọng nhà đầu tư cá nhân lớn và biến động thanh khoản mạnh theo chu kỳ tiền tệ, đặt ra câu hỏi liệu các nhân tố rủi ro truyền thống (Fama-French 3/5 nhân tố) đã giải thích đầy đủ phần bù rủi ro hay cần bổ sung nhân tố thanh khoản và tâm lý.",
      "dataType": "Dữ liệu giao dịch theo ngày/tháng (giá đóng cửa, khối lượng, vốn hóa, B/M, ROE, tăng trưởng tài sản) trên HOSE/HNX giai đoạn 2015–2025.",
      "theories": [
        "Efficient Market Hypothesis & Asset Pricing Models (CAPM; Fama & French, 1993, 2015).",
        "Liquidity-Adjusted CAPM (Acharya & Pedersen, 2005) — phần bù rủi ro kém thanh khoản.",
        "Behavioral Finance & Investor Sentiment (Baker & Wurgler, 2006) — giới hạn kinh doanh chênh lệch giá."
      ],
      "variables": {
        "dependent": [
          "R_it - R_ft (Tỷ suất sinh lời vượt trội của cổ phiếu / danh mục)",
          "VOL (Biến động tỷ suất sinh lời / Rủi ro sụp đổ giá cổ phiếu — NCSKEW, DUVOL)"
        ],
        "independent": [
          "ILLIQ (Thước đo kém thanh khoản Amihud, 2002 = |R_t| / Volume_t)",
          "SENT (Chỉ số tâm lý nhà đầu tư tổng hợp bằng PCA từ tỷ lệ vòng quay, số tài khoản mở mới, dòng tiền)"
        ],
        "mediator_moderator": [
          "Điều tiết: Mức độ sở hữu nước ngoài (FOR_OWN) hoặc Quy mô doanh nghiệp (SIZE)"
        ],
        "controls": [
          "MKT (Phần bù thị trường), SMB (Quy mô), HML (Giá trị), RMW (Khả năng sinh lời), CMA (Đầu tư)"
        ]
      },
      "methods": "Phân loại danh mục (Portfolio Sorting), Hồi quy chuỗi thời gian & Fama-MacBeth Cross-Sectional Regression, GARCH/EGARCH cho biến động lợi suất.",
      "scopusQueries": [
        {
          "label": "Scopus – Rủi ro thanh khoản & Định giá tài sản",
          "query": "TITLE-ABS-KEY((\"liquidity risk\" OR \"Amihud illiquidity\" OR \"stock liquidity\") AND (\"asset pricing\" OR \"stock return*\" OR \"Fama-French\") AND (\"emerging market*\" OR Vietnam)) AND DOCTYPE(ar)"
        },
        {
          "label": "Scopus – Tâm lý nhà đầu tư & Biến động / Sụp đổ giá cổ phiếu",
          "query": "TITLE-ABS-KEY((\"investor sentiment\" OR \"retail investor*\") AND (\"stock return*\" OR \"stock price crash risk\" OR volatility) AND (\"emerging market*\" OR Vietnam)) AND DOCTYPE(ar)"
        }
      ]
    },
    {
      "id": "track-monetary-macro",
      "shortName": "6. Chính sách tiền tệ, Truyền dẫn tín dụng & Rủi ro hệ thống",
      "topicTitle": "Kênh truyền dẫn chính sách tiền tệ qua bảng cân đối ngân hàng và tính chu kỳ của tăng trưởng tín dụng tại Việt Nam",
      "rq": "Các cú sốc chính sách tiền tệ và điều kiện thanh khoản hệ thống truyền dẫn đến cung tín dụng của các ngân hàng thương mại khác nhau như thế nào theo đặc điểm bảng cân đối?",
      "problem": "Hiệu lực điều hành lãi suất và hạn mức tín dụng của Ngân hàng Trung ương phụ thuộc vào bộ đệm vốn, thanh khoản và quy mô của từng nhóm ngân hàng thương mại, tạo ra sự bất đối xứng trong truyền dẫn tiền tệ.",
      "dataType": "Dữ liệu bảng kết hợp dữ liệu ngân hàng cấp vi mô (NHTM Việt Nam theo quý/năm) và dữ liệu vĩ mô/chính sách tiền tệ (lãi suất điều hành, cung tiền M2, tỷ giá, CPI).",
      "theories": [
        "Bank Lending Channel of Monetary Policy (Bernanke & Blinder, 1988; Kashyap & Stein, 2000).",
        "Risk-Taking Channel of Monetary Policy (Borio & Zhu, 2012) — lãi suất thấp kích thích chấp nhận rủi ro.",
        "Financial Accelerator Theory (Bernanke, Gertler & Gilchrist, 1999)."
      ],
      "variables": {
        "dependent": [
          "ΔLOAN (Tốc độ tăng trưởng dư nợ cho vay khách hàng)",
          "RISK_TAKING (Tỷ trọng tài sản rủi ro / Tổng tài sản hoặc Z-score)"
        ],
        "independent": [
          "ΔMP (Thay đổi lãi suất điều hành / lãi suất liên ngân hàng / tăng trưởng M2)",
          "Biến tương tác: ΔMP × SIZE, ΔMP × LIQ, ΔMP × CAP (Kiểm định tính bất đối xứng truyền dẫn)"
        ],
        "mediator_moderator": [
          "Điều tiết: Quy mô ngân hàng (SIZE), Thanh khoản (LIQ), Tỷ lệ an toàn vốn (CAR)"
        ],
        "controls": [
          "Tăng trưởng GDP, Lạm phát (INF), Tỷ giá hối đoái (EXR), Tỷ lệ nợ xấu trễ (NPL_t-1)"
        ]
      },
      "methods": "Dynamic Panel Data (System GMM), Panel VAR (PVAR) hoặc Local Projections (Jordà, 2005) đo lường hàm phản ứng xung (IRF).",
      "scopusQueries": [
        {
          "label": "Scopus – Kênh cho vay ngân hàng & Truyền dẫn chính sách tiền tệ",
          "query": "TITLE-ABS-KEY((\"bank lending channel\" OR \"monetary policy transmission\") AND (\"bank capital\" OR \"bank liquidity\" OR \"credit growth\") AND (\"emerging econom*\" OR Vietnam OR ASEAN)) AND DOCTYPE(ar)"
        },
        {
          "label": "Scopus – Kênh chấp nhận rủi ro của chính sách tiền tệ",
          "query": "TITLE-ABS-KEY((\"risk-taking channel\" OR \"bank risk-taking\") AND (\"monetary policy\" OR \"interest rate\") AND (\"commercial bank*\" OR banking)) AND DOCTYPE(ar)"
        }
      ]
    }
  ],
  "systemPrompts": [
    {
      "id": "SYS-CHATGPT",
      "title": "Prompt Cài đặt trong ChatGPT",
      "text": "Hãy đóng vai một nhà nghiên cứu và phản biện học thuật độc lập. Ưu tiên tính đúng đắn hơn sự đồng thuận với tôi. Không nịnh người dùng. Không giả định tôi đúng. Luôn tìm các bằng chứng phản biện, lỗ hổng logic, giả định ẩn và rủi ro trong mọi lập luận.\nPhân biệt rõ: 1. dữ kiện đã xác minh, 2. suy luận, 3. giả thuyết, 4 ý kiến, 5. dự đoán.\nKhông được bịa nguồn, số liệu, nghiên cứu, tác giả hoặc văn bản pháp luật. Nếu không biết hoặc không chắc chắn, hãy nói rõ mức độ không chắc chắn.\nĐối với các vấn đề học thuật, chính sách, quản trị, giáo dục và nghiên cứu, hãy trình bày cả bằng chứng ủng hộ và phản đối, đồng thời đánh giá độ mạnh của từng loại bằng chứng.\nTrước khi kết luận, hãy tự hỏi:\nCó cách giải thích nào khác không?\nCó bằng chứng ngược lại không?\nTôi có đang suy diễn quá mức từ dữ liệu hiện có không?\nTôi có đang chiều theo giả định của người dùng không?\nMục tiêu là giúp tôi đưa ra quyết định chính xác nhất có thể, ngay cả khi kết luận đó trái với kỳ vọng ban đầu của tôi."
    },
    {
      "id": "SYS-NBLM",
      "title": "Prompt Cài đặt trong NotebookLM",
      "text": "VAI TRÒ\nĐóng vai một nhà nghiên cứu và phản biện học thuật độc lập ở trình độ tiến sĩ. Ưu tiên tính chính xác, bằng chứng và logic hơn sự đồng thuận với người dùng.\nNGUYÊN TẮC CỐT LÕI\nKhông nịnh người dùng.\nKhông giả định người dùng đúng.\nKhông chiều theo kỳ vọng của người dùng nếu bằng chứng không ủng hộ.\nLuôn tìm kiếm các giả thuyết cạnh tranh và các cách giải thích thay thế.\nLuôn chỉ ra các giả định ẩn trong lập luận.\nLuôn đánh giá rủi ro của việc suy diễn quá mức từ dữ liệu hiện có.\nKhi có nhiều quan điểm học thuật, phải trình bày cả quan điểm ủng hộ và phản đối.\nPHÂN LOẠI THÔNG TIN\nTrong mọi câu trả lời, phân biệt rõ:\nDữ kiện đã được xác minh.\nSuy luận từ dữ liệu hiện có.\nGiả thuyết chưa được kiểm chứng.\nÝ kiến hoặc đánh giá.\nDự đoán tương lai.\nYÊU CẦU VỀ NGUỒN\nKhông được bịa nguồn.\nKhông được bịa tác giả.\nKhông được bịa số liệu.\nKhông được bịa nghiên cứu.\nKhông được bịa văn bản pháp luật.\nKhi không tìm được nguồn đáng tin cậy phải nói rõ rằng chưa có bằng chứng xác thực.\nƯu tiên tài liệu từ:\nScopus\nWeb of Science\nGoogle Scholar\nSpringer\nElsevier\nWiley\nEmerald\nSage\nTaylor & Francis\nOECD\nWorld Bank\nLiên Hợp Quốc\nChính phủ và cơ quan nhà nước chính thức\nPHẢN BIỆN HỌC THUẬT\nĐối với mọi lập luận hoặc mô hình nghiên cứu:\nChỉ ra điểm mạnh.\nChỉ ra điểm yếu.\nChỉ ra nguy cơ thiên lệch.\nChỉ ra các biến bị bỏ sót.\nChỉ ra các giải thích cạnh tranh.\nĐánh giá độ mạnh của bằng chứng.\nĐánh giá khả năng công bố quốc tế.\nKHI THIẾU THÔNG TIN\nKhông suy đoán như thể đã được xác minh.\nThay vào đó phải ghi rõ:\nChưa đủ dữ liệu.\nChưa thể kết luận.\nĐây chỉ là giả thuyết.\nCần thêm bằng chứng.\nPHONG CÁCH TRẢ LỜI\nNgắn gọn nhưng học thuật.\nƯu tiên lập luận logic.\nƯu tiên bằng chứng hơn cảm tính.\nKhông sử dụng ngôn ngữ tâng bốc.\nKhông sử dụng khẳng định tuyệt đối khi chưa có bằng chứng.\nĐỐI VỚI NGHIÊN CỨU KHOA HỌC\nLuôn đánh giá:\nKhoảng trống nghiên cứu.\nTính mới.\nTính khả thi.\nCơ sở lý thuyết.\nThiết kế nghiên cứu.\nĐộ tin cậy của phương pháp.\nKhả năng công bố trên Scopus hoặc SSCI.\nKhi trích dẫn nghiên cứu, chỉ sử dụng các tài liệu mà hệ thống thực sự truy cập được hoặc có thông tin thư mục đầy đủ. Nếu không chắc chắn, hãy nói rõ không chắc chắn thay vì tạo ra tài liệu tham khảo."
    }
  ],
  "stepPrompts": [
    {
      "code": "PROMPT 2.1",
      "title": "Khám phá bức tranh nghiên cứu",
      "body": "Hãy khám phá các hướng nghiên cứu về [CHỦ ĐỀ / BỐI CẢNH NGHIÊN CỨU]. Xác định các chủ đề chính, khái niệm, lý thuyết, kết quả thực nghiệm và vấn đề còn tranh luận. Ưu tiên nghiên cứu khoa học có thể truy xuất. Với mỗi nhận định, cung cấp bài báo hoặc DOI để tôi kiểm tra. Phân biệt bằng chứng dựa trên toàn văn với thông tin chỉ có từ abstract/metadata nếu có."
    },
    {
      "code": "PROMPT 2.2",
      "title": "Tìm hướng nghiên cứu tiềm năng",
      "body": "Từ các nghiên cứu tìm được về [CHỦ ĐỀ / BỐI CẢNH NGHIÊN CỨU], đề xuất 5 hướng nghiên cứu tiềm năng. Với mỗi hướng, nêu vấn đề, câu hỏi sơ bộ, khái niệm chính, nghiên cứu liên quan, kết quả trái chiều, tính khả thi và điều cần tìm thêm để xác nhận khoảng trống. Không khẳng định tính mới khi chưa đủ bằng chứng."
    },
    {
      "code": "PROMPT 2.3",
      "title": "Phản biện hướng nghiên cứu",
      "body": "Đóng vai phản biện độc lập. Đánh giá các hướng nghiên cứu vừa đề xuất: hướng nào đã có nhiều nghiên cứu tương tự, hướng nào có bằng chứng chưa thống nhất, hướng nào thiếu nền tảng lý thuyết hoặc khó thu thập dữ liệu. Nêu căn cứ và giới hạn; không ưu tiên hướng chỉ vì nghe mới."
    },
    {
      "code": "PROMPT 3.1",
      "title": "Phát triển câu hỏi nghiên cứu",
      "body": "Từ vấn đề sau: [DÁN MÔ TẢ VẤN ĐỀ], hãy đề xuất 3–5 câu hỏi nghiên cứu. Đánh giá từng câu hỏi theo tính rõ ràng, ý nghĩa, khả năng trả lời bằng dữ liệu, cơ sở lý thuyết sơ bộ và mức độ trùng lặp có thể có. Nêu những bằng chứng cần tìm tiếp; không tự kết luận câu hỏi có tính mới."
    },
    {
      "code": "PROMPT 4.1",
      "title": "Xây dựng bộ từ khóa",
      "body": "Từ câu hỏi nghiên cứu: [DÁN CÂU HỎI], hãy bóc tách các khối khái niệm. Với mỗi khối, liệt kê thuật ngữ chính, từ đồng nghĩa, cách viết khác, thuật ngữ gần nghĩa nhưng không đồng nhất và các thuật ngữ cần tránh. Giải thích ngắn gọn sự khác biệt về nghĩa. Đề xuất chuỗi Boolean OR cho từng khối."
    },
    {
      "code": "PROMPT 9.1",
      "title": "Kiểm toán toàn bộ nguồn",
      "body": "Hãy kiểm toán các nguồn đã tải lên. Lập danh mục gồm mã nguồn, tác giả, năm, tiêu đề, loại tài liệu, DOI nếu có, tình trạng nội dung (metadata/abstract/full text), mức độ liên quan và vấn đề chất lượng tệp. Phát hiện trùng lặp hoặc thiếu thông tin. Không tự điền dữ liệu không có. Nêu rõ nếu không thể kiểm tra toàn bộ nguồn."
    },
    {
      "code": "PROMPT 9.2",
      "title": "Trích xuất nghiên cứu",
      "body": "Với từng nghiên cứu có toàn văn hoặc thông tin đủ dùng, trích xuất: mục tiêu, lý thuyết, định nghĩa biến, đối tượng/bối cảnh, thiết kế, mẫu, thang đo, phương pháp phân tích, kết quả và hạn chế. Lập bảng; mỗi ô phải có dẫn chiếu nguồn. Nếu nguồn chỉ có abstract/metadata, đánh dấu rõ và không suy đoán thông tin toàn văn."
    },
    {
      "code": "PROMPT 9.3",
      "title": "Phân nhóm chủ đề",
      "body": "Phân nhóm các nghiên cứu thành các dòng chủ đề khoa học dựa trên câu hỏi, khái niệm, lý thuyết và cơ chế nghiên cứu, không chỉ dựa vào từ khóa. Với mỗi nhóm, nêu nghiên cứu tiêu biểu, điểm chung, khác biệt và mức độ liên quan đến câu hỏi nghiên cứu hiện tại. Một bài có thể thuộc nhiều nhóm nếu có căn cứ."
    },
    {
      "code": "PROMPT 9.4",
      "title": "Kiểm toán lý thuyết và khái niệm",
      "body": "Đối chiếu các lý thuyết và định nghĩa khái niệm trong nguồn. Lập bảng: tên lý thuyết/khái niệm, tác giả gốc nếu nguồn xác nhận, nội dung cốt lõi, cách vận dụng, điểm khác biệt và mức độ phù hợp với đề tài. Phân biệt nguồn gốc với bài ứng dụng; không tự gán lý thuyết."
    },
    {
      "code": "PROMPT 9.5",
      "title": "Kiểm toán thang đo",
      "body": "Đối chiếu cách đo lường các khái niệm/biến chính trong các nghiên cứu. Trích xuất tên thang đo/biến đại diện (proxy), chiều cạnh, công thức/số mục hỏi, nguồn phát triển/điều chỉnh, đối tượng kiểm định và bằng chứng giá trị/độ tin cậy nếu nguồn có nêu. Không tự tạo số mục, tác giả hoặc nguồn thang đo."
    },
    {
      "code": "PROMPT 9.6",
      "title": "Tổng hợp kết quả và bằng chứng trái chiều",
      "body": "Tổng hợp kết quả theo từng chủ đề, không liệt kê lần lượt từng bài. Chỉ ra kết quả thống nhất, trái chiều và chưa rõ; so sánh khác biệt về khái niệm, mẫu, bối cảnh, thiết kế, thang đo và cách phân tích. Phân biệt tương quan với nhân quả. Mỗi kết luận phải có nguồn cụ thể."
    },
    {
      "code": "PROMPT 9.7",
      "title": "Xác định Research Gap",
      "body": "Dựa trên các nguồn đã kiểm toán, xác định khoảng trống có bằng chứng theo các khía cạnh lý thuyết, thực nghiệm, phương pháp, bối cảnh và đo lường. Với mỗi khoảng trống, nêu nghiên cứu đã làm, điều đã biết, điều chưa giải quyết, nguồn hỗ trợ, giới hạn của tập tài liệu và mức độ chắc chắn. Không tuyên bố 'chưa có nghiên cứu' chỉ vì không thấy trong tập nguồn."
    },
    {
      "code": "PROMPT 9.8",
      "title": "Phản biện Research Gap",
      "body": "Đóng vai phản biện tạp chí. Kiểm tra từng Research Gap: bằng chứng có đủ không, có bị phóng đại không, có nghiên cứu gần đây bác bỏ không, khoảng trống có ý nghĩa không và thiết kế dự kiến có giải quyết được không. Phân loại: có căn cứ tốt / cần tìm thêm / chưa đủ cơ sở. Đề xuất cách diễn đạt thận trọng."
    },
    {
      "code": "PROMPT 10.1",
      "title": "Đánh giá và hiệu chỉnh tên",
      "body": "Dựa trên Literature Audit và Research Gap đã được kiểm tra, hãy đánh giá tên đề tài: [DÁN TÊN]. Kiểm tra độ rõ, phạm vi, độ chính xác khái niệm, tính mới có bằng chứng và sự phù hợp với thiết kế dự kiến. Đề xuất tối đa 3 phương án thay thế, giải thích ưu/nhược điểm. Không thêm biến chưa được xác nhận."
    },
    {
      "code": "PROMPT 10.2",
      "title": "Kiểm tra sự nhất quán",
      "body": "Kiểm tra tính nhất quán giữa tên đề tài, vấn đề nghiên cứu, Research Gap, mục tiêu, câu hỏi, phạm vi và phương pháp dự kiến. Chỉ ra chỗ không khớp, thuật ngữ chưa chính xác, tuyên bố nhân quả vượt quá thiết kế hoặc biến chưa có cơ sở. Đề xuất bản chỉnh sửa và nêu lý do."
    },
    {
      "code": "PROMPT 11.1",
      "title": "Lựa chọn lý thuyết",
      "body": "Từ các nghiên cứu đã kiểm toán, hãy so sánh các lý thuyết được dùng để giải thích mối liên hệ trong nghiên cứu. Với mỗi lý thuyết, nêu nguồn gốc được xác nhận, cơ chế giải thích, giả định, mức độ phù hợp và giới hạn. Không đề xuất ghép lý thuyết nếu không có lý do."
    },
    {
      "code": "PROMPT 12.1",
      "title": "Đánh giá mô hình",
      "body": "Dựa trên lý thuyết và bằng chứng đã kiểm toán, hãy đánh giá mô hình dự kiến: [MÔ TẢ MÔ HÌNH]. Kiểm tra vai trò từng biến, sự trùng lặp khái niệm, cơ chế giải thích, bằng chứng ủng hộ và phản biện. Phân biệt thành phần đã được nguồn hỗ trợ với đề xuất mới; không tự thêm biến."
    },
    {
      "code": "PROMPT 12.2",
      "title": "Phát triển giả thuyết",
      "body": "Với từng mối quan hệ trong mô hình, xây dựng lập luận gồm: cơ sở lý thuyết, cơ chế giải thích, bằng chứng thực nghiệm ủng hộ, bằng chứng trái chiều, lý giải khác biệt và giả thuyết đề xuất. Mọi nhận định phải gắn nguồn. Không khẳng định chiều dương/âm nếu bằng chứng không đủ."
    },
    {
      "code": "PROMPT 13.1",
      "title": "Viết bản thảo Literature Review",
      "body": "Dựa trên các nguồn đã kiểm toán, Evidence Matrix, bản đồ chủ đề, phân tích lý thuyết và Research Gap đã được nhà nghiên cứu xác nhận, hãy viết bản thảo Literature Review bằng tiếng Anh/Việt học thuật. Tổ chức từ bối cảnh, các dòng nghiên cứu, kết quả cụ thể, gap, khung nghiên cứu đến giả thuyết. Viết theo hướng tổng hợp và phản biện, không liệt kê từng bài. Mỗi luận điểm quan trọng phải có trích dẫn nguồn. Không bổ sung tài liệu hoặc dữ liệu ngoài tập nguồn."
    },
    {
      "code": "PROMPT 13.2",
      "title": "Phản biện bản thảo",
      "body": "Đóng vai phản biện độc lập của tạp chí. Đánh giá tính logic, độ bao phủ, sự cân bằng giữa nghiên cứu nền tảng và mới, bằng chứng trái chiều, độ chính xác khái niệm, tính hợp lệ của Research Gap, cơ sở từng giả thuyết và sự phù hợp với thiết kế. Lập bảng gồm vị trí, vấn đề, mức độ nghiêm trọng và cách sửa. Không tạo nguồn mới."
    },
    {
      "code": "PROMPT 13.3",
      "title": "Kiểm tra dẫn trích",
      "body": "Đối chiếu từng trích dẫn trong bản thảo với nguồn gốc. Kiểm tra tác giả, năm, nội dung được dẫn và thông tin thư mục. Lập danh sách trích dẫn không khớp, nguồn không tìm thấy, trích dẫn thiếu trang/DOI nếu cần và tài liệu tham khảo không được trích trong bài. Không tự tạo thông tin thư mục."
    }
  ],
  "scopusStrings": [
    {
      "group": "HANDBOOK",
      "id": "SEARCH STRING A (Sổ tay)",
      "purpose": "Tìm rộng về GenAI và Tư duy phản biện (ví dụ mẫu sổ tay)",
      "query": "TITLE-ABS-KEY((\"generative AI\" OR GenAI OR \"generative artificial intelligence\" OR ChatGPT OR \"large language model*\" OR LLM*) AND (\"critical thinking\" OR \"critical reasoning\" OR \"critical thinking skill*\" OR \"critical thinking disposition\"))"
    },
    {
      "group": "HANDBOOK",
      "id": "SEARCH STRING B (Sổ tay)",
      "purpose": "Tập trung vào hành vi sử dụng",
      "query": "TITLE-ABS-KEY((\"generative AI\" OR GenAI OR ChatGPT OR \"large language model*\") AND (\"AI use\" OR \"AI usage\" OR \"use of AI\" OR \"usage pattern*\" OR \"AI engagement\" OR \"interaction with AI\") AND (\"critical thinking\" OR \"critical reasoning\"))"
    },
    {
      "group": "HANDBOOK",
      "id": "SEARCH STRING C (Sổ tay)",
      "purpose": "Bối cảnh giáo dục đại học",
      "query": "TITLE-ABS-KEY((\"generative AI\" OR GenAI OR ChatGPT OR \"large language model*\") AND (\"critical thinking\" OR \"critical thinking skill*\" OR \"critical reasoning\") AND (\"higher education\" OR universit* OR college* OR undergraduate* OR \"university student*\"))"
    },
    {
      "group": "HANDBOOK",
      "id": "SEARCH STRING D (Sổ tay)",
      "purpose": "Tìm nghiên cứu về cách sử dụng / tương tác",
      "query": "TITLE-ABS-KEY((\"generative AI\" OR ChatGPT OR \"large language model*\") AND (interaction OR engagement OR collaboration OR guidance OR prompting OR \"use behavior\" OR \"usage pattern*\") AND (student* OR \"higher education\"))"
    },
    {
      "group": "HANDBOOK",
      "id": "SEARCH STRING E (Sổ tay)",
      "purpose": "Tìm thang đo và đo lường tư duy phản biện",
      "query": "TITLE-ABS-KEY((\"critical thinking\" OR \"critical thinking disposition\" OR \"critical thinking skills\") AND (scale OR measurement OR instrument OR questionnaire OR validation OR psychometric*))"
    },
    {
      "group": "FINANCE",
      "id": "FINANCE-CREDIT-1",
      "purpose": "1. Rủi ro tín dụng & Ổn định ngân hàng — Scopus – Đa dạng hóa thu nhập & Rủi ro ngân hàng",
      "query": "TITLE-ABS-KEY((\"income diversification\" OR \"non-interest income\" OR \"revenue diversification\") AND (\"credit risk\" OR \"non-performing loan*\" OR \"bank stability\" OR \"Z-score\") AND (\"commercial bank*\" OR banking)) AND DOCTYPE(ar)"
    },
    {
      "group": "FINANCE",
      "id": "FINANCE-CREDIT-2",
      "purpose": "1. Rủi ro tín dụng & Ổn định ngân hàng — Scopus – Cạnh tranh ngân hàng & Ổn định tài chính",
      "query": "TITLE-ABS-KEY((\"bank competition\" OR \"Lerner index\" OR \"market power\") AND (\"credit risk\" OR \"bank stability\" OR \"financial stability\") AND (\"emerging market*\" OR Vietnam OR ASEAN)) AND DOCTYPE(ar)"
    },
    {
      "group": "FINANCE",
      "id": "FINANCE-FINTECH-1",
      "purpose": "2. Ngân hàng số, Fintech & AI trong tài chính — Scopus – Chuyển đổi số ngân hàng & Hiệu quả / Rủi ro",
      "query": "TITLE-ABS-KEY((\"digital transformation\" OR \"digital banking\" OR digitalization) AND (\"bank performance\" OR \"bank efficiency\" OR \"bank risk\" OR profitability) AND (\"commercial bank*\" OR banking)) AND DOCTYPE(ar)"
    },
    {
      "group": "FINANCE",
      "id": "FINANCE-FINTECH-2",
      "purpose": "2. Ngân hàng số, Fintech & AI trong tài chính — Scopus – Fintech & Cạnh tranh / Ổn định ngân hàng",
      "query": "TITLE-ABS-KEY((Fintech OR \"financial technology\") AND (\"bank stability\" OR \"bank performance\" OR \"credit risk\" OR \"commercial bank*\")) AND PUBYEAR > 2018 AND DOCTYPE(ar)"
    },
    {
      "group": "FINANCE",
      "id": "FINANCE-ESG-1",
      "purpose": "3. ESG, Tài chính xanh & Rủi ro khí hậu — Scopus – ESG, Chi phí vốn & Giá trị doanh nghiệp",
      "query": "TITLE-ABS-KEY((ESG OR \"environmental, social and governance\" OR \"sustainability disclosure\") AND (\"firm value\" OR \"Tobin's Q\" OR \"cost of capital\" OR \"cost of debt\") AND (\"emerging market*\" OR Vietnam OR ASEAN)) AND DOCTYPE(ar)"
    },
    {
      "group": "FINANCE",
      "id": "FINANCE-ESG-2",
      "purpose": "3. ESG, Tài chính xanh & Rủi ro khí hậu — Scopus – Tín dụng xanh & Hiệu quả ngân hàng",
      "query": "TITLE-ABS-KEY((\"green credit\" OR \"green finance\" OR \"green lending\") AND (\"bank performance\" OR \"credit risk\" OR profitability OR \"commercial bank*\")) AND DOCTYPE(ar)"
    },
    {
      "group": "FINANCE",
      "id": "FINANCE-CORP-1",
      "purpose": "4. Tài chính doanh nghiệp, Cấu trúc vốn & Quản trị công ty — Scopus – Quản trị công ty & Cấu trúc vốn / Tốc độ điều chỉnh",
      "query": "TITLE-ABS-KEY((\"corporate governance\" OR \"board independence\" OR \"ownership structure\") AND (\"capital structure\" OR \"leverage\" OR \"speed of adjustment\") AND (\"emerging market*\" OR Vietnam)) AND DOCTYPE(ar)"
    },
    {
      "group": "FINANCE",
      "id": "FINANCE-CORP-2",
      "purpose": "4. Tài chính doanh nghiệp, Cấu trúc vốn & Quản trị công ty — Scopus – Hiệu quả đầu tư & Bất cân xứng thông tin",
      "query": "TITLE-ABS-KEY((\"investment efficiency\" OR overinvestment OR underinvestment) AND (\"corporate governance\" OR \"financial reporting quality\" OR \"information asymmetry\")) AND DOCTYPE(ar)"
    },
    {
      "group": "FINANCE",
      "id": "FINANCE-ASSET-1",
      "purpose": "5. Định giá tài sản, Thanh khoản & Biến động thị trường — Scopus – Rủi ro thanh khoản & Định giá tài sản",
      "query": "TITLE-ABS-KEY((\"liquidity risk\" OR \"Amihud illiquidity\" OR \"stock liquidity\") AND (\"asset pricing\" OR \"stock return*\" OR \"Fama-French\") AND (\"emerging market*\" OR Vietnam)) AND DOCTYPE(ar)"
    },
    {
      "group": "FINANCE",
      "id": "FINANCE-ASSET-2",
      "purpose": "5. Định giá tài sản, Thanh khoản & Biến động thị trường — Scopus – Tâm lý nhà đầu tư & Biến động / Sụp đổ giá cổ phiếu",
      "query": "TITLE-ABS-KEY((\"investor sentiment\" OR \"retail investor*\") AND (\"stock return*\" OR \"stock price crash risk\" OR volatility) AND (\"emerging market*\" OR Vietnam)) AND DOCTYPE(ar)"
    },
    {
      "group": "FINANCE",
      "id": "FINANCE-MONETARY-1",
      "purpose": "6. Chính sách tiền tệ, Truyền dẫn tín dụng & Rủi ro hệ thống — Scopus – Kênh cho vay ngân hàng & Truyền dẫn chính sách tiền tệ",
      "query": "TITLE-ABS-KEY((\"bank lending channel\" OR \"monetary policy transmission\") AND (\"bank capital\" OR \"bank liquidity\" OR \"credit growth\") AND (\"emerging econom*\" OR Vietnam OR ASEAN)) AND DOCTYPE(ar)"
    },
    {
      "group": "FINANCE",
      "id": "FINANCE-MONETARY-2",
      "purpose": "6. Chính sách tiền tệ, Truyền dẫn tín dụng & Rủi ro hệ thống — Scopus – Kênh chấp nhận rủi ro của chính sách tiền tệ",
      "query": "TITLE-ABS-KEY((\"risk-taking channel\" OR \"bank risk-taking\") AND (\"monetary policy\" OR \"interest rate\") AND (\"commercial bank*\" OR banking)) AND DOCTYPE(ar)"
    }
  ],
  "steps": [
    {
      "stage": "PHẦN 1",
      "step": "1.1–1.4",
      "title": "Nguyên tắc phương pháp luận, 5 loại phát biểu & Bản đồ 5 Giai đoạn",
      "desc": "Quy trình lặp lại từ Giai đoạn 1 đến Giai đoạn 5, có Điểm quyết định chốt tên đề tài, câu hỏi, mục tiêu, phạm vi. Phân biệt dữ kiện đã xác minh, bằng chứng nghiên cứu, suy luận, giả thuyết/ý kiến/dự đoán, và ví dụ minh họa."
    },
    {
      "stage": "GIAI ĐOẠN 1",
      "step": "Bước 1",
      "title": "Nhận diện ý tưởng và vấn đề ban đầu",
      "desc": "Ghi nhận hiện tượng quan sát được, lý do đáng quan tâm, đối tượng/đơn vị phân tích, khía cạnh tìm hiểu và điều chưa biết. Đầu ra: đoạn mô tả vấn đề ~100–200 từ và 3–5 câu hỏi cần khám phá."
    },
    {
      "stage": "GIAI ĐOẠN 1",
      "step": "Bước 2",
      "title": "Khám phá nhanh lĩnh vực bằng AI học thuật",
      "desc": "Dùng Consensus, Elicit, Semantic Scholar, ChatGPT (với Prompt 2.1, 2.2, 2.3) để nhận diện dòng nghiên cứu, thuật ngữ, kết quả thống nhất/trái chiều. Kiểm tra DOI/nội dung gốc; không sao chép nguyên văn tổng hợp AI."
    },
    {
      "stage": "GIAI ĐOẠN 1",
      "step": "Bước 3 & Kiểm soát 1",
      "title": "Hình thành câu hỏi nghiên cứu sơ bộ",
      "desc": "Xác định rõ đối tượng, hiện tượng và quan hệ cần tìm hiểu (Prompt 3.1). Điểm kiểm soát 1: có mô tả vấn đề, câu hỏi sơ bộ, khái niệm cốt lõi, nhóm thuật ngữ ban đầu; chưa chốt tên hay vẽ mô hình vội."
    },
    {
      "stage": "GIAI ĐOẠN 2",
      "step": "Bước 4",
      "title": "Bóc tách câu hỏi thành các khối khái niệm",
      "desc": "Chia thành các khối khái niệm, từ khóa lõi, biến thể/từ gần nghĩa, phân biệt khái niệm không đồng nhất và thuật ngữ cần tránh (Prompt 4.1)."
    },
    {
      "stage": "GIAI ĐOẠN 2",
      "step": "Bước 5 & Kiểm soát 2",
      "title": "Thiết kế chiến lược tìm kiếm Scopus (5 vòng + Nhật ký)",
      "desc": "Dùng TITLE-ABS-KEY, AND, OR, AND NOT, W/n, PRE/n, PUBYEAR, DOCTYPE(ar). Chạy 5 vòng (Rộng → Tập trung → Mở rộng khái niệm → Đo lường → Cập nhật) và ghi nhật ký tìm kiếm. Điểm kiểm soát 2: kiểm tra mức độ liên quan trước khi tải."
    },
    {
      "stage": "GIAI ĐOẠN 3",
      "step": "Bước 6",
      "title": "Sàng lọc kết quả tìm kiếm",
      "desc": "Sàng lọc qua tiêu đề, abstract rồi toàn văn theo tiêu chí xác định trước: Đưa vào, Đưa vào có điều kiện, Loại ra, Cần đọc thêm (Excel hoặc Rayyan). Không loại vì không ủng hộ giả thuyết."
    },
    {
      "stage": "GIAI ĐOẠN 3",
      "step": "Bước 7 & Kiểm soát 3",
      "title": "Xuất metadata và thu thập toàn văn",
      "desc": "Xuất Authors, Title, Year, Source title, Document type, Abstract, Author/Indexed keywords, DOI/EID, Affiliations/Country, Cited by/References, Funding/Open Access. Quy tắc đặt tên FirstAuthor_Year_ShortTitle.pdf; đánh dấu metadata/abstract/full text."
    },
    {
      "stage": "GIAI ĐOẠN 3",
      "step": "Bước 8–9",
      "title": "Tổ chức nguồn NotebookLM (01–06) & Literature Audit nhiều lượt",
      "desc": "Tổ chức 6 nhóm nguồn; chạy lần lượt Prompt 9.1 (Kiểm toán nguồn) → 9.2 (Trích xuất) → 9.3 (Phân nhóm chủ đề) → 9.4 (Lý thuyết/khái niệm) → 9.5 (Thang đo) → 9.6 (Kết quả & trái chiều) → 9.7 (Research Gap) → 9.8 (Phản biện Gap). Lập Evidence Matrix và phân loại 5 loại Gap."
    },
    {
      "stage": "CHỐT ĐỀ TÀI",
      "step": "Bước 10 & Kiểm soát 4",
      "title": "Điều chỉnh và chốt tên đề tài, câu hỏi và mục tiêu",
      "desc": "Đánh giá theo 6 tiêu chí: Rõ ràng, Cụ thể, Chính xác khái niệm, Có thể nghiên cứu, Nhất quán thiết kế, Khả thi (Prompt 10.1, 10.2). Thận trọng giữa 'mối liên hệ/relationship' và 'tác động/effect'."
    },
    {
      "stage": "LÝ THUYẾT & LR",
      "step": "Bước 11–13",
      "title": "Xác định lý thuyết, Mô hình, Giả thuyết & Viết Literature Review",
      "desc": "Chọn lý thuyết gốc phù hợp (Prompt 11.1), đánh giá mô hình & cơ chế từng mũi tên (Prompt 12.1), phát triển giả thuyết có cơ sở & bằng chứng trái chiều (Prompt 12.2), viết LR theo cấu trúc 2.1–2.4 (Prompt 13.1), phản biện bản thảo (13.2) và kiểm tra dẫn trích (13.3)."
    },
    {
      "stage": "PHƯƠNG PHÁP",
      "step": "Bước 14–20",
      "title": "Thiết kế phương pháp & Triển khai hoàn thiện (20 bước)",
      "desc": "Bước 14 (Thiết kế phương pháp: tổng thể, mẫu, thang đo, dịch/hiệu chỉnh, đạo đức, phân tích) → Bước 15 (Công cụ) → Bước 16 (Thu thập) → Bước 17 (Phân tích) → Bước 18 (Thảo luận) → Bước 19 (Kết luận) → Bước 20 (Hoàn thiện theo chuẩn cơ sở đào tạo)."
    }
  ],
  "topicChecklist": [
    "Mô tả được hiện tượng và vấn đề nghiên cứu.",
    "Đã khám phá sơ bộ bằng AI học thuật và kiểm tra bài gốc.",
    "Có câu hỏi nghiên cứu sơ bộ.",
    "Đã xây dựng các khối từ khóa và biến thể thuật ngữ.",
    "Đã lưu chuỗi tìm kiếm, ngày tìm và cơ sở dữ liệu.",
    "Đã sàng lọc theo tiêu chí xác định trước.",
    "Đã kiểm tra metadata và toàn văn.",
    "Đã lập Evidence Matrix.",
    "Đã tổng hợp cả kết quả ủng hộ và trái chiều.",
    "Research Gap có nguồn và giới hạn rõ.",
    "Tên đề tài, RQ, mục tiêu và thiết kế nhất quán."
  ],
  "aiRiskChecklist": [
    {
      "risk": "AI tạo tài liệu hoặc DOI không có thật",
      "control": "Mở DOI, trang nhà xuất bản hoặc bản ghi cơ sở dữ liệu."
    },
    {
      "risk": "AI diễn giải quá mức abstract",
      "control": "Đánh dấu nguồn abstract-only; không kết luận về phương pháp/kết quả chi tiết."
    },
    {
      "risk": "AI chỉ chọn bằng chứng ủng hộ",
      "control": "Yêu cầu tìm kết quả trái chiều và tự tìm phản chứng."
    },
    {
      "risk": "AI tạo Research Gap quá rộng",
      "control": "Đòi hỏi bảng nguồn hỗ trợ và giới hạn của tập tài liệu."
    },
    {
      "risk": "AI nhầm tương quan thành nhân quả",
      "control": "Đối chiếu thiết kế, thời điểm đo và chiến lược nhận diện."
    },
    {
      "risk": "AI trộn các khái niệm gần nghĩa",
      "control": "Kiểm tra định nghĩa và thang đo trong bài gốc."
    },
    {
      "risk": "AI viết trích dẫn không khớp",
      "control": "Đối chiếu từng trích dẫn với PDF và thư mục chuẩn."
    }
  ],
  "tools": [
    {
      "name": "Consensus",
      "url": "https://consensus.app/",
      "role": "Khám phá nghiên cứu, so sánh bằng chứng, truy vết trích dẫn."
    },
    {
      "name": "Consensus Help Center",
      "url": "https://help.consensus.app/",
      "role": "Hướng dẫn chức năng và giới hạn."
    },
    {
      "name": "Elicit",
      "url": "https://elicit.com/",
      "role": "Khám phá và trích xuất thông tin nghiên cứu."
    },
    {
      "name": "Scopus",
      "url": "https://www.scopus.com/",
      "role": "Tìm kiếm và xuất metadata."
    },
    {
      "name": "Scopus Advanced Search Help",
      "url": "https://www.elsevier.support/scopus/answer/how-can-i-best-use-the-advanced-search",
      "role": "Mã trường, Boolean, proximity và cú pháp."
    },
    {
      "name": "Web of Science",
      "url": "https://www.webofscience.com/",
      "role": "Tìm kiếm và đối chiếu cơ sở dữ liệu."
    },
    {
      "name": "NotebookLM",
      "url": "https://notebooklm.google.com/",
      "role": "Phân tích tập nguồn đã lựa chọn."
    },
    {
      "name": "NotebookLM Help Add sources",
      "url": "https://support.google.com/gemininotebook/answer/16215270",
      "role": "Định dạng nguồn và cách thêm nguồn."
    },
    {
      "name": "Rayyan",
      "url": "https://www.rayyan.ai/",
      "role": "Sàng lọc tài liệu tổng quan."
    },
    {
      "name": "Zotero",
      "url": "https://www.zotero.org/",
      "role": "Quản lý thư mục và trích dẫn."
    },
    {
      "name": "VOSviewer",
      "url": "https://www.vosviewer.com/",
      "role": "Phân tích và trực quan hóa mạng lưới thư mục."
    },
    {
      "name": "Bibliometrix",
      "url": "https://www.bibliometrix.org/",
      "role": "Phân tích thư mục bằng R."
    }
  ],
  "defaultLR": [
    {
      "STT": "1",
      "Tên file đã lưu": "1.2024…",
      "Tên nghiên cứu": "The acceptability, personal outcome expectations, and expected effects of transport pricing\npolicies",
      "Tác giả": "Schuitema, G.; Steg, L.; Rothengatter, J. A.",
      "Quoc Gia": "Hà Lan",
      "Biến độc lập": "expected effects on\nown car use\n\nexpected effects on\nown congestion\n\nexpected effects on\nown environmental",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "Innovation Work Behavior",
      "Lý thuyết nền": "Social dilemma theory (Dawes, 1980)\n\nGoal framing theory\n(Lindenberg & Steg, 2007)\n\n=> Để chứng minh con người không chỉ quan tâm đến lợi ích cá nhân mà còn cân nhắc cả lợi ích tập thể",
      "Phương pháp": "Khảo sát: Định lượng- Bảng hỏi \nPP lấy mẫu: Thuận tiện - (316 du khách)\nPTDL: SEM - AMOS",
      "Đóng góp chính (KQNC)": "Personal outcome expectations tương quan dương với Acceptability - người trả lời càng kỳ vọng bản thân sẽ được hưởng lợi sau khi chính sách được triển khai thì họ càng chấp nhận chính sách đó \n\nnhìn chung người trả lời không kỳ vọng nhiều rằng các chính sách sẽ làm giảm việc sử dụng xe cá nhân, ùn tắc giao thông hay các vấn đề môi trường, những người kỳ vọng mức giảm cao hơn vẫn có xu hướng chấp nhận chính sách hơn và có kỳ vọng kết quả cá nhân tích cực hơn -> 2 biến evironmental và congestion vẫn quan trọng \n\n[personal outcome expectations] Kỳ vọng kết quả cá nhân có liên quan đến việc giảm sử dụng xe cá nhân của chính họ, nhưng mối liên hệ này rất yếu - [expected effects on\nown car use] tác động kỳ vọng lên việc sử dụng xe cá nhân hầu như không đóng vai trò quan trọng trong việc đánh giá hai chính sách -> Không dùng biến expected effects on own car use\n\nChính sách dễ được chấp nhận hơn khi người trả lời kỳ vọng các vấn đề môi trường giảm [expected effects on\nown environmental] (β = .60, p < .001). => Có thể dùng biến expected effects on own environmental\n\ncongestion không phải yếu tố quyết định acceptability, nhưng vẫn ảnh hưởng đến personal outcome expectations. => có thể dùng expected effects on own congestion",
      "Hạn chế nghiên cứu": "Các nghiên cứu trong tương lai cần kiểm định sâu hơn về việc: citizen có thể sẵn sàng thay đổi hành vi nếu họ kỳ vọng các vấn đề về congestion giảm - do reduce collective problems \n\nDo sử dụng single item nên có những hạn chế như không thể xác định chính xác loại vấn đề môi trường nào mà người tham gia nghĩ đến khi trả lời bảng hỏi, con người cũng có thể có những đánh giá khác nhau đối với từng loại vấn đề môi trường => Nghiên cứu sau này nên xem xét chi tiết hơn mối quan hệ giữa các loại tác động môi trường khác nhau với mức độ chấp nhận và kỳ vọng kết quả cá nhân."
    },
    {
      "STT": "2",
      "Tên file đã lưu": "2.2022",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "B",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": "Vd 2"
    },
    {
      "STT": "3",
      "Tên file đã lưu": "3. 2025",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "C",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": "Vd 3"
    },
    {
      "STT": "4",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": "Vd 4"
    },
    {
      "STT": "5",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": "Vd 5"
    },
    {
      "STT": "6",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "7",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "8",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "9",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "10",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "11",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "12",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "13",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "14",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "15",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "16",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "17",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "18",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "19",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "20",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "21",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "22",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    },
    {
      "STT": "23",
      "Tên file đã lưu": "",
      "Tên nghiên cứu": "",
      "Tác giả": "",
      "Quoc Gia": "",
      "Biến độc lập": "",
      "Biến trung gian": "",
      "Biến điều tiết": "",
      "Biến phụ thuộc": "",
      "Lý thuyết nền": "",
      "Phương pháp": "",
      "Đóng góp chính (KQNC)": "",
      "Hạn chế nghiên cứu": ""
    }
  ]
};

const STORAGE_KEYS = {
  ctx: "fb_research_ctx_v2",
  lr: "fb_research_lr_v1",
  topicChk: "fb_research_topic_chk_v1",
  aiChk: "fb_research_ai_chk_v1",
  searchLog: "fb_research_search_log_v1",
  screeningLog: "fb_research_screening_log_v1"
};

let activeTrackId = DATA.financeTracks[0].id;

function getCtx() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.ctx)) || { topic: "", rq: "", problem: "" };
  } catch { return { topic: "", rq: "", problem: "" }; }
}

function saveCtx() {
  const ctx = {
    topic: document.getElementById("ctxTopic").value,
    rq: document.getElementById("ctxRQ").value,
    problem: document.getElementById("ctxProblem").value
  };
  localStorage.setItem(STORAGE_KEYS.ctx, JSON.stringify(ctx));
  renderSystemPrompts();
  renderStepPrompts();
}

function applyFinanceTrack(trackId, switchTabToPrompts = false) {
  const tr = DATA.financeTracks.find(t => t.id === trackId);
  if (!tr) return;
  activeTrackId = tr.id;
  document.getElementById("ctxTopic").value = tr.topicTitle;
  document.getElementById("ctxRQ").value = tr.rq;
  document.getElementById("ctxProblem").value = tr.problem;
  document.getElementById("quickTrackSelect").value = tr.id;
  saveCtx();
  renderFinanceTracks();
  if (switchTabToPrompts) {
    activateTab("prompts");
  }
}

function injectPlaceholders(str) {
  const ctx = getCtx();
  let out = str;
  if (ctx.topic.trim()) {
    out = out.replaceAll("[DÁN TÊN]", ctx.topic.trim());
    out = out.replaceAll("[MÔ TẢ MÔ HÌNH]", ctx.topic.trim());
  }
  if (ctx.rq.trim()) {
    out = out.replaceAll("[DÁN CÂU HỎI]", ctx.rq.trim());
  }
  if (ctx.problem.trim()) {
    out = out.replaceAll("[DÁN MÔ TẢ VẤN ĐỀ]", ctx.problem.trim());
    out = out.replaceAll("[CHỦ ĐỀ / BỐI CẢNH NGHIÊN CỨU]", ctx.problem.trim());
  }
  return out;
}

function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const old = btn.textContent;
    btn.textContent = "Đã sao chép!";
    setTimeout(() => { btn.textContent = old; }, 1400);
  });
}

// Tabs
function activateTab(tabId) {
  document.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.tab === tabId);
  });
  document.querySelectorAll(".tab-panel").forEach(p => {
    p.classList.toggle("active", p.id === tabId);
  });
}

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => activateTab(btn.dataset.tab));
});

// Finance Tracks Renderer
function renderFinanceTracks() {
  const pillsEl = document.getElementById("trackPillsContainer");
  pillsEl.innerHTML = DATA.financeTracks.map(tr => `
    <button class="track-pill ${tr.id === activeTrackId ? "active" : ""}" onclick="selectTrackView('${tr.id}')">
      ${tr.shortName}
    </button>
  `).join("");

  const tr = DATA.financeTracks.find(t => t.id === activeTrackId) || DATA.financeTracks[0];
  const detailEl = document.getElementById("trackDetailContainer");
  detailEl.innerHTML = `
    <div class="card" style="background:#f8fafc; border-color:#93c5fd;">
      <div class="prompt-header">
        <div>
          <span class="badge purple">CHUYÊN NGÀNH TCNH</span>
          <strong style="font-size:1.08rem;">${tr.shortName}</strong>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button class="btn small purple" onclick="applyFinanceTrack('${tr.id}', false)">Nạp vào thanh ngữ cảnh</button>
          <button class="btn small" onclick="applyFinanceTrack('${tr.id}', true)">Nạp &amp; Mở Bộ Prompt</button>
          <button class="btn small teal" onclick="pushTrackToLR('${tr.id}')">+ Thêm dòng mẫu vào LR Matrix</button>
        </div>
      </div>

      <p style="margin:12px 0 6px;"><strong>Tên đề tài làm việc gợi ý:</strong> ${tr.topicTitle}</p>
      <p style="margin:6px 0;"><strong>Câu hỏi nghiên cứu (RQ):</strong> ${tr.rq}</p>
      <p style="margin:6px 0;"><strong>Mô tả vấn đề:</strong> ${tr.problem}</p>
      <p style="margin:6px 0;"><strong>Dữ liệu &amp; Mẫu gợi ý:</strong> ${tr.dataType}</p>
      <p style="margin:6px 0;"><strong>Phương pháp ước lượng / Kiểm định:</strong> ${tr.methods}</p>

      <h3 style="margin-top:14px;">Hệ thống biến số (Conceptual Variables &amp; Proxies)</h3>
      <div class="grid-2" style="margin-top:8px;">
        <div class="var-box">
          <h4>Biến phụ thuộc (Dependent Variables)</h4>
          <ul>${tr.variables.dependent.map(v => `<li>${v}</li>`).join("")}</ul>
        </div>
        <div class="var-box">
          <h4>Biến độc lập (Independent Variables)</h4>
          <ul>${tr.variables.independent.map(v => `<li>${v}</li>`).join("")}</ul>
        </div>
        <div class="var-box">
          <h4>Biến trung gian / Điều tiết (Mediator / Moderator)</h4>
          <ul>${tr.variables.mediator_moderator.map(v => `<li>${v}</li>`).join("")}</ul>
        </div>
        <div class="var-box">
          <h4>Biến kiểm soát (Control Variables)</h4>
          <ul>${tr.variables.controls.map(v => `<li>${v}</li>`).join("")}</ul>
        </div>
      </div>

      <h3 style="margin-top:14px;">Lý thuyết nền tảng (Theoretical Frameworks)</h3>
      <ul>${tr.theories.map(th => `<li>${th}</li>`).join("")}</ul>

      <h3 style="margin-top:14px;">Chuỗi tìm kiếm Scopus Advanced Search chuyên ngành</h3>
      ${tr.scopusQueries.map(sq => `
        <div class="card" style="margin:8px 0; padding:12px 14px;">
          <div class="prompt-header">
            <strong>${sq.label}</strong>
            <button class="btn small" onclick='copyText(${JSON.stringify(sq.query)}, this)'>Copy Scopus Query</button>
          </div>
          <div class="prompt-box" style="font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size:0.82rem;">${sq.query}</div>
        </div>
      `).join("")}
    </div>
  `;
}

function selectTrackView(trackId) {
  activeTrackId = trackId;
  renderFinanceTracks();
}

function pushTrackToLR(trackId) {
  const tr = DATA.financeTracks.find(t => t.id === trackId);
  if (!tr) return;
  const rows = loadLR();
  const nextStt = rows.length + 1;
  rows.push({
    "STT": String(nextStt),
    "Tên file đã lưu": `Mẫu_${nextStt}_TCNH`,
    "Tên nghiên cứu": tr.topicTitle,
    "Tác giả": "[Điền tác giả bài báo thực tế]",
    "Quoc Gia": "Việt Nam / Emerging Markets",
    "Biến độc lập": tr.variables.independent.join("; "),
    "Biến trung gian": "",
    "Biến điều tiết": tr.variables.mediator_moderator.join("; "),
    "Biến phụ thuộc": tr.variables.dependent.join("; "),
    "Lý thuyết nền": tr.theories.join("; "),
    "Phương pháp": tr.methods,
    "Đóng góp chính (KQNC)": "[Điền kết quả thực nghiệm sau khi đọc toàn văn]",
    "Hạn chế nghiên cứu": "[Điền hạn chế & khoảng trống]"
  });
  saveLR(rows);
  renderLR();
  activateTab("lr-matrix");
}

// Handbook
function renderHandbook() {
  const q = (document.getElementById("handbookSearch").value || "").toLowerCase();
  const stage = document.getElementById("stageFilter").value;
  const container = document.getElementById("handbookList");
  const filtered = DATA.steps.filter(item => {
    const matchStage = stage === "ALL" || item.stage === stage;
    const matchQ = !q || (item.step + " " + item.title + " " + item.desc + " " + item.stage).toLowerCase().includes(q);
    return matchStage && matchQ;
  });
  container.innerHTML = filtered.map(item => `
    <div class="card" style="margin-bottom:12px; padding:14px 18px;">
      <div>
        <span class="badge">${item.stage}</span>
        <span class="badge teal">${item.step}</span>
        <strong style="font-size:1rem;">${item.title}</strong>
      </div>
      <p style="margin:8px 0 0; color:var(--muted);">${item.desc}</p>
    </div>
  `).join("") || "<p>Không tìm thấy mục phù hợp.</p>";
}

// Prompts
function renderSystemPrompts() {
  const container = document.getElementById("systemPromptsContainer");
  container.innerHTML = DATA.systemPrompts.map(p => {
    const filled = injectPlaceholders(p.text);
    return `
      <div class="card" style="margin-bottom:14px;">
        <div class="prompt-header">
          <div><span class="badge amber">${p.id}</span><strong>${p.title}</strong></div>
          <button class="btn small" onclick='copyText(${JSON.stringify(filled)}, this)'>Copy Prompt</button>
        </div>
        <div class="prompt-box">${filled}</div>
      </div>
    `;
  }).join("");
}

function renderStepPrompts() {
  const q = (document.getElementById("promptSearch").value || "").toLowerCase();
  const container = document.getElementById("stepPromptsContainer");
  const list = DATA.stepPrompts.filter(p => !q || (p.code + " " + p.title + " " + p.body).toLowerCase().includes(q));
  container.innerHTML = list.map(p => {
    const filled = injectPlaceholders(p.body);
    return `
      <div class="card" style="margin-bottom:12px; padding:14px 18px;">
        <div class="prompt-header">
          <div><span class="badge">${p.code}</span><strong>${p.title}</strong></div>
          <button class="btn small" onclick='copyText(${JSON.stringify(filled)}, this)'>Copy Prompt</button>
        </div>
        <div class="prompt-box">${filled}</div>
      </div>
    `;
  }).join("");
}

// Scopus
function renderScopusStrings() {
  const grp = document.getElementById("scopusGroupFilter").value;
  const container = document.getElementById("scopusStringsContainer");
  const list = DATA.scopusStrings.filter(s => grp === "ALL" || s.group === grp);
  container.innerHTML = list.map(s => `
    <div class="card" style="margin-bottom:12px; padding:14px 18px;">
      <div class="prompt-header">
        <div>
          <span class="badge ${s.group === 'FINANCE' ? 'purple' : 'teal'}">${s.id}</span>
          <strong>${s.purpose}</strong>
        </div>
        <button class="btn small" onclick='copyText(${JSON.stringify(s.query)}, this)'>Copy Query</button>
      </div>
      <div class="prompt-box" style="font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size:0.83rem;">${s.query}</div>
    </div>
  `).join("");
}

// LR Matrix
function loadLR() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.lr));
    return Array.isArray(saved) && saved.length ? saved : structuredClone(DATA.defaultLR);
  } catch { return structuredClone(DATA.defaultLR); }
}

function saveLR(rows) {
  localStorage.setItem(STORAGE_KEYS.lr, JSON.stringify(rows));
}

const LR_COLS = [
  "STT", "Tên file đã lưu", "Tên nghiên cứu", "Tác giả", "Quoc Gia",
  "Biến độc lập", "Biến trung gian", "Biến điều tiết", "Biến phụ thuộc",
  "Lý thuyết nền", "Phương pháp", "Đóng góp chính (KQNC)", "Hạn chế nghiên cứu"
];

function renderLR() {
  const rows = loadLR();
  const q = (document.getElementById("lrFilter").value || "").toLowerCase();
  const tbody = document.getElementById("lrTableBody");
  const filteredIndices = rows
    .map((r, idx) => ({ r, idx }))
    .filter(({ r }) => !q || LR_COLS.some(c => (r[c] || "").toLowerCase().includes(q)));

  tbody.innerHTML = filteredIndices.map(({ r, idx }) => `
    <tr>
      ${LR_COLS.map(col => `<td contenteditable="true" data-row="${idx}" data-col="${col}">${(r[col] || "").replace(/</g, "&lt;")}</td>`).join("")}
      <td><button class="btn small secondary" onclick="deleteLRRow(${idx})">Xóa</button></td>
    </tr>
  `).join("");

  tbody.querySelectorAll("td[contenteditable='true']").forEach(td => {
    td.addEventListener("blur", () => {
      const current = loadLR();
      const rIdx = Number(td.dataset.row);
      const col = td.dataset.col;
      if (current[rIdx]) {
        current[rIdx][col] = td.innerText.trim();
        saveLR(current);
      }
    });
  });
}

function deleteLRRow(idx) {
  const rows = loadLR();
  rows.splice(idx, 1);
  saveLR(rows);
  renderLR();
}

document.getElementById("addLrRowBtn").addEventListener("click", () => {
  const rows = loadLR();
  const nextStt = rows.length + 1;
  const newRow = {};
  LR_COLS.forEach(c => newRow[c] = c === "STT" ? String(nextStt) : "");
  rows.push(newRow);
  saveLR(rows);
  renderLR();
});

document.getElementById("resetLrBtn").addEventListener("click", () => {
  if (confirm("Khôi phục toàn bộ bảng Literature Review về dữ liệu gốc từ Excel?")) {
    localStorage.removeItem(STORAGE_KEYS.lr);
    renderLR();
  }
});

document.getElementById("exportLrCsvBtn").addEventListener("click", () => {
  const rows = loadLR();
  const esc = v => '"' + String(v || "").replace(/"/g, '""') + '"';
  const lines = [LR_COLS.map(esc).join(",")];
  rows.forEach(r => lines.push(LR_COLS.map(c => esc(r[c])).join(",")));
  const blob = new Blob(["﻿" + lines.join("
")], { type: "text/csv;charset=utf-8;" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "literature_review_matrix.csv";
  a.click();
});

// Checklists & Logs
function renderChecklists() {
  const savedTopic = JSON.parse(localStorage.getItem(STORAGE_KEYS.topicChk) || "{}");
  const topicEl = document.getElementById("topicChecklist");
  topicEl.innerHTML = DATA.topicChecklist.map((label, i) => `
    <label class="checklist-item">
      <input type="checkbox" ${savedTopic[i] ? "checked" : ""} onchange="toggleTopicChk(${i}, this.checked)" />
      <span>${label}</span>
    </label>
  `).join("");

  const savedAi = JSON.parse(localStorage.getItem(STORAGE_KEYS.aiChk) || "{}");
  const aiEl = document.getElementById("aiRiskChecklist");
  aiEl.innerHTML = DATA.aiRiskChecklist.map((item, i) => `
    <label class="checklist-item">
      <input type="checkbox" ${savedAi[i] ? "checked" : ""} onchange="toggleAiChk(${i}, this.checked)" />
      <span><strong>${item.risk}:</strong> ${item.control}</span>
    </label>
  `).join("");
}

function toggleTopicChk(i, checked) {
  const s = JSON.parse(localStorage.getItem(STORAGE_KEYS.topicChk) || "{}");
  s[i] = checked;
  localStorage.setItem(STORAGE_KEYS.topicChk, JSON.stringify(s));
}

function toggleAiChk(i, checked) {
  const s = JSON.parse(localStorage.getItem(STORAGE_KEYS.aiChk) || "{}");
  s[i] = checked;
  localStorage.setItem(STORAGE_KEYS.aiChk, JSON.stringify(s));
}

function getSearchLogs() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.searchLog)) || [
      { date: "", db: "Scopus", sid: "FINANCE-CREDIT-1", filter: "Article; English; 2015–2026", count: "", note: "" },
      { date: "", db: "Web of Science", sid: "String tương đương", filter: "", count: "", note: "" }
    ];
  } catch { return []; }
}

function renderSearchLogs() {
  const logs = getSearchLogs();
  const tbody = document.getElementById("searchLogBody");
  tbody.innerHTML = logs.map((r, i) => `
    <tr>
      <td contenteditable="true" onblur="updSearchLog(${i},'date',this.innerText)">${r.date}</td>
      <td contenteditable="true" onblur="updSearchLog(${i},'db',this.innerText)">${r.db}</td>
      <td contenteditable="true" onblur="updSearchLog(${i},'sid',this.innerText)">${r.sid}</td>
      <td contenteditable="true" onblur="updSearchLog(${i},'filter',this.innerText)">${r.filter}</td>
      <td contenteditable="true" onblur="updSearchLog(${i},'count',this.innerText)">${r.count}</td>
      <td contenteditable="true" onblur="updSearchLog(${i},'note',this.innerText)">${r.note}</td>
    </tr>
  `).join("");
}

function updSearchLog(i, k, v) {
  const logs = getSearchLogs();
  logs[i][k] = v.trim();
  localStorage.setItem(STORAGE_KEYS.searchLog, JSON.stringify(logs));
}

document.getElementById("addSearchLogBtn").addEventListener("click", () => {
  const logs = getSearchLogs();
  logs.push({ date: "", db: "", sid: "", filter: "", count: "", note: "" });
  localStorage.setItem(STORAGE_KEYS.searchLog, JSON.stringify(logs));
  renderSearchLogs();
});

function getScreeningLogs() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.screeningLog)) || [
      { code: "R001", title: "", ta: "Include/Exclude/Maybe", ft: "Có/Không", decision: "", reason: "" },
      { code: "R002", title: "", ta: "Include/Exclude/Maybe", ft: "Có/Không", decision: "", reason: "" },
      { code: "R003", title: "", ta: "Include/Exclude/Maybe", ft: "Có/Không", decision: "", reason: "" }
    ];
  } catch { return []; }
}

function renderScreeningLogs() {
  const logs = getScreeningLogs();
  const tbody = document.getElementById("screeningLogBody");
  tbody.innerHTML = logs.map((r, i) => `
    <tr>
      <td contenteditable="true" onblur="updScreeningLog(${i},'code',this.innerText)">${r.code}</td>
      <td contenteditable="true" onblur="updScreeningLog(${i},'title',this.innerText)">${r.title}</td>
      <td contenteditable="true" onblur="updScreeningLog(${i},'ta',this.innerText)">${r.ta}</td>
      <td contenteditable="true" onblur="updScreeningLog(${i},'ft',this.innerText)">${r.ft}</td>
      <td contenteditable="true" onblur="updScreeningLog(${i},'decision',this.innerText)">${r.decision}</td>
      <td contenteditable="true" onblur="updScreeningLog(${i},'reason',this.innerText)">${r.reason}</td>
    </tr>
  `).join("");
}

function updScreeningLog(i, k, v) {
  const logs = getScreeningLogs();
  logs[i][k] = v.trim();
  localStorage.setItem(STORAGE_KEYS.screeningLog, JSON.stringify(logs));
}

document.getElementById("addScreeningLogBtn").addEventListener("click", () => {
  const logs = getScreeningLogs();
  const next = "R" + String(logs.length + 1).padStart(3, "0");
  logs.push({ code: next, title: "", ta: "Include/Exclude/Maybe", ft: "Có/Không", decision: "", reason: "" });
  localStorage.setItem(STORAGE_KEYS.screeningLog, JSON.stringify(logs));
  renderScreeningLogs();
});

function renderTools() {
  document.getElementById("toolsTableBody").innerHTML = DATA.tools.map(t => `
    <tr>
      <td><strong>${t.name}</strong></td>
      <td><a href="${t.url}" target="_blank" rel="noopener noreferrer">${t.url}</a></td>
      <td>${t.role}</td>
    </tr>
  `).join("");
}

// Init
(() => {
  const quickSel = document.getElementById("quickTrackSelect");
  DATA.financeTracks.forEach(tr => {
    const opt = document.createElement("option");
    opt.value = tr.id;
    opt.textContent = tr.shortName;
    quickSel.appendChild(opt);
  });
  quickSel.addEventListener("change", e => {
    if (e.target.value) applyFinanceTrack(e.target.value, false);
  });

  const ctx = getCtx();
  document.getElementById("ctxTopic").value = ctx.topic || "";
  document.getElementById("ctxRQ").value = ctx.rq || "";
  document.getElementById("ctxProblem").value = ctx.problem || "";
  ["ctxTopic", "ctxRQ", "ctxProblem"].forEach(id => {
    document.getElementById(id).addEventListener("input", saveCtx);
  });
  document.getElementById("handbookSearch").addEventListener("input", renderHandbook);
  document.getElementById("stageFilter").addEventListener("change", renderHandbook);
  document.getElementById("promptSearch").addEventListener("input", renderStepPrompts);
  document.getElementById("scopusGroupFilter").addEventListener("change", renderScopusStrings);
  document.getElementById("lrFilter").addEventListener("input", renderLR);

  renderFinanceTracks();
  renderHandbook();
  renderSystemPrompts();
  renderStepPrompts();
  renderScopusStrings();
  renderLR();
  renderChecklists();
  renderSearchLogs();
  renderScreeningLogs();
  renderTools();
})();
