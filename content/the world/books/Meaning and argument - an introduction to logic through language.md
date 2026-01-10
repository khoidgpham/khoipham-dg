---
tags:
  - logic
  - argument
book cover: https://m.media-amazon.com/images/I/41B1fz55cyL._SY445_SX342_ControlCacheEqualizer_.jpg
Read: false
---
### I. Tổng Quan về Sách và Mục Tiêu

- Cuốn sách tập trung mạnh vào việc chuyển dịch ngôn ngữ tự nhiên sang ngôn ngữ hình thức để làm rõ ý nghĩa và đánh giá các luận cứ, sự khác biệt của cuốn sách này so với các văn bản logic nhập môn truyền thống là sự tập trung phạm vi của nó các cấu trúc ngôn ngữ tự nhiên được khảo sát rộng và phong phú hơn.
- Sử dụng phương pháp cây bảng ngữ nghĩa (semantic tableaux method) để tìm kiếm mô hình và phản mô hình, thay vì hệ thống suy diễn tự nhiên truyền thống %% tìm hiểu thêm %%.
- Đặc biệt hữu ích cho sinh viên triết học và ngôn ngữ học, ngay cả khi họ không có ý định nghiên cứu sâu hơn về logic hình thức.
- **Triết lý giảng dạy:** Nhấn mạnh sự hiểu biết sâu sắc về các hệ thống hình thức và sự phát triển của chúng, thay vì chỉ cung cấp các "công thức" hoặc "kỹ thuật từng bước" để giải quyết vấn đề. Khuyến khích sinh viên đặt câu hỏi "Tại sao cần một hình thức cụ thể?" và "Tại sao nó được xây dựng và phát triển như vậy?".
- **Cách tiếp cận:** Tiến triển từ một ngôn ngữ hình thức đơn giản đến các ngôn ngữ phức tạp hơn (Logic Mệnh đề, Logic Vị từ Thuộc tính, Logic Vị từ Quan hệ, Logic Vị từ Quan hệ với Đồng nhất), giải thích lý do cho từng sự phức tạp.
- **Phân biệt quan trọng:** Liên tục phân biệt giữa suy luận logic và suy luận hội thoại (conversational inferences), cho rằng nhiều ngụy biện logic có thể được hiểu là sự thất bại trong việc phân biệt hai loại này.

### II. Các Khái Niệm Chính và Thuật Ngữ

**Chương 1: Giới thiệu ngắn gọn về các thuật ngữ chính**

- **Luận cứ (Arguments):** Một tập hợp các phát biểu, một trong số đó là kết luận (phát biểu được bảo vệ) và các phát biểu còn lại là tiền đề (phát biểu cung cấp sự bảo vệ).
- **Phát biểu (Statement):** Bất kỳ câu khẳng định nào mà có thể đúng hoặc sai. Phát biểu khác với câu hỏi (interrogatives), câu mệnh lệnh (imperatives), và câu cảm thán (exclamations).
- **Tiền đề (Premises):** Các phát biểu cung cấp cơ sở hoặc lý do để tin vào kết luận.
	- **Chỉ báo tiền đề (Premise indicators):** Các từ hoặc cụm từ như 'since', 'because', 'for', 'after all', 'given', 'whereas', 'although', 'suppose', 'assume', 'let us presume', 'granted', 'here are the facts'. Tiếng việt sẽ là 'từ khi', 'bởi vì', 'vì', 'sau tất cả', 'với điều kiện', 'trong khi', 'mặc dù', 'giả sử', 'giả định', 'chúng ta hãy giả định', 'giả sử rằng', 'đây là các sự kiện'
- **Kết luận (Conclusion):** Phát biểu được suy ra hoặc được bảo vệ bởi các tiền đề.
	- **Chỉ báo kết luận (Conclusion indicators):** Các từ hoặc cụm từ như 'consequently', 'therefore', 'so', 'hence', 'it follows', '...proves', '...shows', 'we can now infer', 'it cannot fail to be', 'let us conclude', 'this implies', 'these facts indicate', 'this supports the view or claim', 'let us infer', 'as a consequence we can deduce'.
- **Định dạng chuẩn (Standard Format):** Cách trình bày luận cứ rõ ràng để dễ đánh giá:
	1. Xác định được tiền đề và kết luận.
	2. Đặt tiền đề trước (thứ tự không quan trọng).
	3. Đặt kết luận sau cùng.
	4. Làm rõ bất kỳ tiền đề hoặc kết luận nào bị ẩn (implicit) nhưng cần thiết cho luận cứ.

- **Nhiều kết luận (Multiple Conclusions):** Theo định nghĩa của sách, một luận cứ chỉ có một kết luận. Các trường hợp có vẻ có nhiều kết luận được giải thích là:
	- Các luận cứ riêng biệt có cùng tiền đề nhưng kết luận khác nhau.
	- Các luận cứ được xâu chuỗi (chained arguments), trong đó kết luận của một luận cứ trở thành tiền đề của luận cứ tiếp theo.
- **Tính hiệu lực suy diễn (Deductive Validity):** Một luận cứ là có tính hiệu lực suy diễn nếu không thể xảy ra trường hợp các tiền đề của nó đều đúng và kết luận của nó sai.
	- **Tính hiệu lực suy diễn không liên quan đến sự thật thực tế:** Một luận cứ có thể có hiệu lực (valid) ngay cả khi tất cả các phát biểu (tiền đề và kết luận) đều sai.
	- **Tính không hiệu lực (Invalidity):** Một luận cứ là không có hiệu lực nếu có ít nhất một trường hợp (mô hình phản ví dụ) mà tất cả các tiền đề của nó đều đúng và kết luận của nó sai.
- **Tính đúng đắn (Soundness):** Một luận cứ là đúng đắn nếu nó vừa có hiệu lực suy diễn VÀ tất cả các tiền đề của nó đều đúng. (Một luận cứ có hiệu lực nhưng tiền đề sai thì không đúng đắn).
- **Tiền đề và kết luận bị thiếu (Missing Premises and Conclusions):** Trong ngôn ngữ tự nhiên, đôi khi tiền đề hoặc thậm chí kết luận bị bỏ qua vì được coi là hiển nhiên. Tuy nhiên, việc thêm các tiền đề bị thiếu cần phải cẩn thận để không biến một luận cứ yếu thành một luận cứ có vẻ mạnh một cách giả tạo.

**Chương 2: Các Hình thức Luận cứ và Logic Mệnh đề (PL)**

- **Tính hiệu lực hình thức (Formal Validity):** Một luận cứ có hiệu lực do hình thức (cấu trúc) của nó, không phụ thuộc vào ý nghĩa của các từ 'phi logic'.
- **Trích dẫn (Quotation Marks):** Dấu nháy đơn (' ') được dùng để đề cập đến một biểu thức ngôn ngữ, chứ không phải sử dụng nó để chỉ vật được nói đến. (Ví dụ: 'Robert Zimmerman' là tên, không phải người).
- **Biến siêu ngôn ngữ (Metalinguistic Variables):** Các chữ cái Hy Lạp (α, β, γ...) được dùng như các biến thay thế cho bất kỳ biểu thức ngôn ngữ nào, cho phép nói về các biểu thức ngôn ngữ nói chung (ví dụ: hình thức luận cứ).
- **Tính hiệu lực phi hình thức (Non-formal Validity):** Luận cứ có hiệu lực do ý nghĩa của các từ 'phi logic' (ví dụ: "John là người độc thân. Vậy John chưa kết hôn." – hiệu lực do ý nghĩa của 'độc thân'). Logic Mệnh đề tập trung vào tính hiệu lực hình thức.
- **Ký hiệu trong Logic Mệnh đề (PL):Chữ cái phát biểu (Statement letters):** Các chữ cái in hoa (A, B, C... Z, có thể có chỉ số dưới A1, B2...) để ký hiệu cho các phát biểu đơn giản.
- **Phát biểu đơn giản (Simple statement):** Phát biểu không thuộc bất kỳ loại phát biểu phức hợp nào trong PL (chưa thể phân tích thành các phần nhỏ hơn là phát biểu).
- **Phân biệt loại/đơn vị (Type/Token Distinction):Loại (Type):** Các hình thức trừu tượng của biểu thức (ví dụ: từ 'the').
- **Đơn vị (Token):** Các lần xuất hiện cụ thể của một loại biểu thức (ví dụ: số lần từ 'the' xuất hiện trong một câu).
- **Quy tắc ký hiệu trong PL:Quy tắc 1:** Một phát biểu đơn giản được ký hiệu bằng một chữ cái phát biểu duy nhất.
- **Quy tắc 2 (mở rộng):** Nếu hai loại phát biểu đơn giản khác nhau có thể được coi là từ đồng nghĩa của nhau trong ngữ cảnh của một luận cứ, thì mỗi loại nên được ký hiệu bằng cùng một loại chữ cái phát biểu.

**Chương 3: Phép Nối (Conjunction)**

- **Phép nối logic (Logical Conjunction):** Một phát biểu phức hợp đúng khi và chỉ khi tất cả các phát biểu thành phần (các "liên từ") của nó đều đúng.
- **Ký hiệu:** '&' (ampersand).
- **Bảng chân trị (Truth Table):**α & β đúng khi α đúng VÀ β đúng.
- Sai trong các trường hợp còn lại.
- **Các cách diễn đạt phép nối trong tiếng Anh:** 'and', 'but', 'while', 'even though', 'though', 'yet', 'however', dấu chấm phẩy (;).
- **Phân biệt suy diễn và phi suy diễn của phép nối:** Sự khác biệt về ý nghĩa giữa 'and' và 'but' (ví dụ: 'nhưng' thường chỉ sự tương phản) là phi logic (liên quan đến suy luận hội thoại), không ảnh hưởng đến điều kiện chân trị logic của phép nối.
- **Giải cấu trúc chuỗi (Series Decompounding):** Các phát biểu có động từ, trợ động từ, chủ ngữ, tân ngữ, trạng từ được nối với nhau có thể được giải cấu trúc thành các phép nối logic (ví dụ: "Joy, Bill, and Frank went to the store" thành "Joy went... and Bill went... and Frank went...").
- **Sử dụng 'respectively' (tương ứng):** Diễn giải thành các phép nối logic (ví dụ: "Philip and Bill passed and failed respectively" thành "Philip passed and Bill failed").
- **Giới hạn của phép nối logic trong tiếng Anh:** Không phải mọi câu chứa 'and' đều là phép nối logic theo định nghĩa này (ví dụ: "Tom and William met" không có nghĩa là "Tom met and William met").

**Chương 4: Phủ định (Negation)**

- **Phủ định logic (Logical Negation):** Một phát biểu phức hợp đúng khi và chỉ khi phát biểu thành phần của nó sai.
- **Ký hiệu:** '-' (tilde).
- **Bảng chân trị:**-α đúng khi α sai.
- -α sai khi α đúng.
- **Các cách diễn đạt phủ định trong tiếng Anh:** 'It is not the case that', 'not', 'n't' (contracted form), 'false', các tiền tố phủ định ('un-', 'im-'), các từ mang nghĩa phủ định ('none', 'nobody', 'nothing', 'nowhere', 'never').
- **Phân biệt 'contradictoies' (mâu thuẫn) và 'contraries' (tương phản):Mâu thuẫn:** Hai phát biểu mà nếu một cái đúng thì cái kia sai, và ngược lại (ví dụ: "John chết" và "John không chết").
- **Tương phản:** Hai phát biểu không thể cùng đúng (nhưng có thể cùng sai) (ví dụ: "Hầu hết mọi người rời đi" và "Ít người rời đi").
- **'None' và các từ tương tự:** Thường được coi là phủ định của 'some' (ví dụ: 'none' = 'not some', 'nobody' = 'not somebody').
- **Tính mơ hồ và nhu cầu về dấu nhóm (Groupers):** Dấu ngoặc đơn '(', ')' được sử dụng để loại bỏ sự mơ hồ trong các phát biểu phức hợp, giống như trong toán học. Chúng xác định phạm vi của các liên từ.
- **Sử dụng 'without' (mà không):** Đôi khi diễn giải thành phép nối với phủ định ('and not'), nhưng không phải luôn luôn (có thể là câu điều kiện).

**Chương 5: Bảng chân trị (Truth Tables)**

- **Công thức được tạo thành tốt (Well-formed Formulas - WFFs):** Các cấu trúc ngữ pháp hợp lệ trong PL. Bao gồm các phát biểu đơn giản, phép nối logic, phép phủ định logic.
- **Liên từ chính (Main Connective):** Liên từ có phạm vi rộng nhất trong một công thức phức hợp. Nó xác định trạng thái logic của phát biểu.
- **Phương pháp bảng chân trị (Truth Table Method):Mục tiêu:** Xác định xem một phát biểu có đúng hay không chỉ bằng cách sử dụng bảng chân trị, biết giá trị chân trị của các phát biểu thành phần.
- **Quy tắc:** Tạo ra tất cả các kết hợp có thể có của giá trị chân trị cho các phát biểu đơn giản thành phần (2^n hàng, với n là số phát biểu đơn giản khác nhau). Sau đó, áp dụng các quy tắc bảng chân trị cho các liên từ để xác định giá trị chân trị của phát biểu phức hợp.
- **Phạm vi (Scope):** Đoạn công thức ngắn nhất mà một ký hiệu xuất hiện. Ký hiệu có phạm vi rộng hơn nếu phạm vi của nó bao gồm phạm vi của ký hiệu khác.
- **Ứng dụng bảng chân trị để đánh giá luận cứ:**Liệt kê tất cả các tiền đề và kết luận của luận cứ trong bảng.
- Luận cứ có hiệu lực suy diễn nếu không có hàng nào mà tất cả các tiền đề đều đúng VÀ kết luận sai.
- Luận cứ không có hiệu lực nếu có ít nhất một hàng mà tất cả các tiền đề đều đúng VÀ kết luận sai (hàng phản ví dụ).
- **Các loại phát biểu theo bảng chân trị:Ngẫu nhiên (Contingent):** Có thể đúng hoặc sai tùy thuộc vào hoàn cảnh (có ít nhất một hàng đúng và ít nhất một hàng sai trong bảng chân trị của nó).
- **Luôn đúng (Tautology/Logically True):** Luôn đúng, bất kể giá trị chân trị của các thành phần (tất cả các hàng trong bảng chân trị của nó đều đúng).
- **Mâu thuẫn (Contradiction/Logically False):** Luôn sai, bất kể giá trị chân trị của các thành phần (tất cả các hàng trong bảng chân trị của nó đều sai).
- **Hệ quả:** Luận cứ có tiền đề là mâu thuẫn thì luôn có hiệu lực. Luận cứ có kết luận là luôn đúng thì luôn có hiệu lực.
- **Tính nhất quán (Consistency):** Một tập hợp các phát biểu là nhất quán nếu có ít nhất một trường hợp (hàng trong bảng chân trị) mà tất cả các phát biểu trong tập hợp đều đúng. Nếu không có hàng nào như vậy, tập hợp là không nhất quán.
- **Tính tương đương logic (Logical Equivalence):** Hai phát biểu là tương đương logic nếu chúng có cùng giá trị chân trị trong mọi trường hợp có thể (bảng chân trị của chúng giống hệt nhau).

**Chương 6: Phép Tuyển (Disjunction)**

- **Phép tuyển logic (Logical Disjunction):** Một phát biểu phức hợp đúng khi và chỉ khi ít nhất một trong các phát biểu thành phần (các "tuyển từ") của nó đúng.
- **Ký hiệu:** 'v' (vee).
- **Bảng chân trị:**α v β đúng khi α đúng, hoặc β đúng, hoặc cả hai đúng.
- Sai khi cả α và β đều sai.
- **Các cách diễn đạt phép tuyển trong tiếng Anh:** 'Either... or', 'or', 'unless'.
- **Phủ định của phép tuyển (Negation of a Disjunction):** Phát biểu có dạng 'Neither α nor β' được ký hiệu là '-(α v β)' (tương đương với '-α & -β').
- **'Neither... nor':** Diễn đạt phủ định của phép tuyển.
- **'Inclusive OR' (hoặc bao hàm) so với 'Exclusive OR' (hoặc loại trừ):Bao hàm:** Đúng khi ít nhất một tuyển từ đúng, bao gồm cả trường hợp cả hai cùng đúng (là cách hiểu chuẩn trong logic hình thức).
- **Loại trừ:** Đúng khi chính xác một tuyển từ đúng (không bao gồm trường hợp cả hai cùng đúng). Sách lập luận rằng không có ví dụ rõ ràng về 'hoặc' loại trừ trong tiếng Anh ở cấp độ ý nghĩa logic, mà thường là suy luận hội thoại.
- **Phạm vi và dấu nhóm (Groupers):** Cần thiết để loại bỏ sự mơ hồ khi có nhiều phép nối/tuyển trong cùng một phát biểu.

**Chương 7: Câu Điều kiện (Conditionals)**

- **Câu điều kiện logic (Logical Conditional):** Phát biểu có hai thành phần: tiền tố (antecedent) và hậu tố (consequent). Phát biểu điều kiện sai khi và chỉ khi tiền tố đúng và hậu tố sai.
- **Ký hiệu:** '⊃' (horseshoe).
- **Bảng chân trị:**α ⊃ β sai khi α đúng VÀ β sai.
- Đúng trong các trường hợp còn lại.
- **Tiền tố (Antecedent):** Phát biểu đi sau 'if'.
- **Hậu tố (Consequent):** Phát biểu đi sau 'then'.
- **Các cách diễn đạt câu điều kiện trong tiếng Anh:** 'If... then', 'Provided that', 'Should', 'When', 'will result in', 'will bring about', 'will lead to'.
- **Điều kiện đủ (Sufficient Condition):** Nếu α là điều kiện đủ cho β, thì nếu α xảy ra, β cũng xảy ra (ký hiệu: α ⊃ β).
- **Điều kiện cần (Necessary Condition):** Nếu α là điều kiện cần cho β, thì nếu β xảy ra, α phải xảy ra (ký hiệu: β ⊃ α).
- **'Only if':** Diễn đạt điều kiện cần (phần đi sau 'only if' là hậu tố) (ký hiệu: α only if β = α ⊃ β).
- **'Unless':** Diễn đạt câu điều kiện với tiền tố phủ định (α unless β = -β ⊃ α).
- **'If and only if' (khi và chỉ khi):** Diễn đạt một phép nối của hai câu điều kiện (α iff β = (α ⊃ β) & (β ⊃ α)). Sách không giới thiệu ký hiệu riêng cho phép song điều kiện.

**Chương 8: Phương pháp Cây chân trị (Truth Tree Method)**

- **Mục tiêu:** Một phương pháp suy diễn hình thức để kiểm tra tính hiệu lực của luận cứ và các tính chất logic khác của phát biểu (tương tự bảng chân trị nhưng hiệu quả hơn với các phát biểu phức tạp).
- **Nguyên tắc cơ bản:** Để kiểm tra tính hiệu lực của một luận cứ (P1, P2... Pn ∴ C), ta xây dựng một cây chân trị cho tập hợp {P1, P2... Pn, -C}. Nếu tất cả các nhánh của cây đều đóng (dẫn đến mâu thuẫn), luận cứ là có hiệu lực. Nếu có ít nhất một nhánh mở, luận cứ là không có hiệu lực.
- **Phát biểu nguyên tử (Atomic Statements):** Phát biểu đơn giản hoặc phủ định của phát biểu đơn giản.
- **Phát biểu phức hợp (Compound Statements):** Phát biểu không nguyên tử.
- **Các quy tắc cây chân trị (Truth Tree Rules):** Có 7 quy tắc chính (tương ứng với các loại phát biểu phức hợp: phép nối, phép tuyển, câu điều kiện, phủ định của các loại này và phủ định của phủ định).
- **Quy tắc không phân nhánh (Non-branching Rules):** Áp dụng khi phát biểu phức hợp chỉ đúng trong một trường hợp (ví dụ: phép nối α & β đúng khi α đúng VÀ β đúng).
- **Quy tắc phân nhánh (Branching Rules):** Áp dụng khi phát biểu phức hợp đúng trong nhiều trường hợp (ví dụ: phép tuyển α v β đúng khi α đúng HOẶC β đúng).
- **Chiến lược áp dụng quy tắc:** Ưu tiên áp dụng quy tắc không phân nhánh trước quy tắc phân nhánh để giữ cây đơn giản nhất có thể.
- **Đóng nhánh (Closing a Branch):** Một nhánh đóng nếu nó chứa một phát biểu và phủ định của phát biểu đó (ký hiệu 'X' dưới nhánh).
- **Mở nhánh (Open Branch):** Một nhánh không đóng.
- **Mô hình phản ví dụ (Counter-examples/Counter-models):** Một nhánh mở hoàn chỉnh trong cây chân trị của một luận cứ không có hiệu lực cung cấp một cách gán giá trị chân trị cho các phát biểu nguyên tử, làm cho tiền đề đúng và kết luận sai.

**Chương 9: Logic Vị từ Thuộc tính (PPL)**

- **Giới hạn của Logic Mệnh đề:** Không thể phân tích tính hiệu lực của các luận cứ dựa vào cấu trúc bên trong của các phát biểu đơn giản (ví dụ: "Tất cả chó đều là loài có vú. Fido là chó. Vậy Fido là loài có vú."). PPL ra đời để khắc phục điều này.
- **Thuật ngữ số ít (Singular Terms):** Các biểu thức dùng để chỉ các đối tượng cụ thể (ví dụ: tên riêng như 'Aristotle', mô tả xác định như 'người phát minh ra kính hai tròng', đại từ số ít như 'tôi', 'cô ấy'). Ký hiệu bằng chữ cái in thường (a, b, c... w).
- **Vị từ thuộc tính (Property Predicates):** Các biểu thức gán một thuộc tính cho một chủ ngữ số ít (ví dụ: 'is a dog', 'is tall', 'runs'). Ký hiệu bằng chữ cái in hoa có chỉ số trên '1' (D1, T1, R1...).
- **Phát biểu chủ-vị số ít (Singular Subject-Predicate Statements):** Được hình thành bằng cách nối một vị từ thuộc tính với một thuật ngữ số ít (ví dụ: D1j = "John là chó").
- **Lượng từ (Quantifiers):** Các biểu thức chỉ số lượng (ví dụ: 'all', 'some', 'no', 'every'). PPL tập trung vào hai loại:
- **Lượng từ tồn tại (Existential Quantifier):** Chỉ sự tồn tại của ít nhất một đối tượng có thuộc tính nhất định.
- **Ký hiệu:** '∃' (backwards E).
- **Cách ký hiệu:** ∃(P1) (đọc là "có thứ gì đó là P").
- **Lượng từ phổ quát (Universal Quantifier):** Chỉ rằng mọi đối tượng trong một phạm vi nhất định đều có thuộc tính nhất định.
- **Ký hiệu:** '∀' (upside-down A).
- **Cách ký hiệu:** ∀(P1) (đọc là "mọi thứ đều là P").
- **Phủ định của lượng từ:** 'Không ai' = phủ định của 'có ai đó' (¬∃x Px = ∀x ¬Px).
- **Vị từ phức hợp (Complex Predicates):** Các vị từ được tạo thành bằng cách áp dụng các liên từ phát biểu cho các vị từ đơn giản (ví dụ: 'is either a dog or a sheep' được ký hiệu là (D1 v S1)).
- **Công thức được tạo thành tốt trong PPL (Well-formedness in PPL):** Bao gồm thuật ngữ số ít, vị từ thuộc tính, lượng từ (có ràng buộc biến), và các liên từ logic.

**Chương 10: Đánh giá Luận cứ trong Logic Vị từ Thuộc tính**

- **Giới hạn của phương pháp bảng chân trị trong PPL:** Không thể xác định tính hiệu lực của luận cứ PPL vì các phần của phát biểu phức hợp trong PPL (vị từ, thuật ngữ số ít, lượng từ) không có giá trị chân trị.
- **Lượng từ và phạm vi (Quantifiers and Scope):** Phạm vi của lượng từ là công thức được tạo thành tốt ngắn nhất mà lượng từ đó xuất hiện và ràng buộc các biến trong đó. Điều này rất quan trọng để xác định loại phát biểu và tính hiệu lực.
- **Mở rộng phương pháp cây chân trị cho PPL:** Giới thiệu 3 quy tắc lượng từ mới:
- **Quy tắc Trao đổi Lượng từ (Quantifier Exchange Rule - QE):** Cho phép chuyển đổi giữa phủ định của lượng từ phổ quát và lượng từ tồn tại với phủ định bên trong (ví dụ: ¬∀x Px ≡ ∃x ¬Px; ¬∃x Px ≡ ∀x ¬Px).
- **Quy tắc Lượng từ Phổ quát (Universal Quantifier Rule - UQ):** Nếu một phát biểu phổ quát đúng, thì mọi trường hợp cụ thể của nó (instantiation) cũng đúng. Cho phép thêm một trường hợp cụ thể (thay biến bằng một thuật ngữ số ít) vào nhánh.
- **Chiến lược UQ:** Chỉ thêm các trường hợp cụ thể cho các thuật ngữ số ít đã có trên nhánh. Nếu không có, chọn một thuật ngữ số ít tùy ý.
- **Quy tắc Lượng từ Tồn tại (Existential Quantifier Rule - EQ):** Nếu một phát biểu tồn tại đúng, thì phải có ít nhất một cá thể làm cho nó đúng. Cho phép gán một thuật ngữ số ít MỚI (chưa xuất hiện trên nhánh) cho biến của lượng từ tồn tại.
- **Chiến lược tổng quát của cây chân trị trong PPL:** Ưu tiên EQ trước UQ (để giới thiệu các thuật ngữ số ít mới cần thiết) và các quy tắc không phân nhánh trước các quy tắc phân nhánh.
- **Cây chân trị vô hạn (Infinite Truth Trees):** Một số trường hợp có thể dẫn đến cây chân trị không kết thúc (vô hạn), khi các quy tắc liên tục tạo ra các phát biểu mới cần được phân tích. Cần tìm kiếm sự lặp lại (recursion) hoặc các mô hình để xác định tính hợp lệ.
- **Mô hình phản ví dụ trong PPL:** Một nhánh mở hoàn chỉnh trong cây chân trị PPL cung cấp một cách gán các giá trị chân trị cho các vị từ thuộc tính đối với các thuật ngữ số ít xuất hiện trên nhánh, tạo ra một trường hợp tiền đề đúng và kết luận sai.

**Chương 11: Các Tinh chỉnh về Logic Vị từ Thuộc tính**

- **'Lions' và ngữ cảnh:** Ý nghĩa của các thuật ngữ tổng quát có thể thay đổi tùy ngữ cảnh (có thể là phổ quát hay tồn tại).
- **'Any' như một lượng từ tồn tại:** Trong một số ngữ cảnh (đặc biệt là trong tiền tố của câu điều kiện), 'any' hoạt động như một lượng từ tồn tại ('if any' = 'if some', không phải 'if all').
- **Mệnh đề quan hệ hạn định (Restrictive Relative Clauses):** 'Wh-' (who, which, that) giới hạn phạm vi của danh từ mà nó bổ nghĩa. Chúng được ký hiệu là phép nối vị từ (ví dụ: 'student who works hard' = 'S1 & W1').
- **Đại từ (Pronouns):Deictic (chỉ định):** Tham chiếu dựa vào ngữ cảnh phi ngôn ngữ (ví dụ: 'she' khi chỉ bằng ngón tay). Được ký hiệu bằng thuật ngữ số ít.
- **Anaphoric (quy chiếu):** Tham chiếu dựa vào một biểu thức tiền đề trong cùng câu hoặc đoạn văn.
- **Đại từ phản thân:** 'herself', 'himself'.
- **Quy chiếu và lượng hóa:** Khi đại từ quy chiếu đến một lượng từ, nó được 'ràng buộc' (bound) bởi lượng từ đó. Có thể dẫn đến các cách ký hiệu khác nhau (ví dụ: 'If something is tall, then it is happy' có thể là ∀x(T1x ⊃ H1x)).
- **'Only' như một lượng từ:** 'Only α are β' được ký hiệu là '∀x(βx ⊃ αx)' (tức là "Tất cả những gì là β đều là α"). Vị từ của 'only' đảo ngược thứ tự trong ký hiệu logic.
- **Các từ hạn định trong tiếng Anh:** Một số lượng từ (ví dụ: 'a few', 'many', 'most', 'few', 'almost all', 'little', 'much') không thể được ký hiệu đầy đủ chỉ bằng ∀ và ∃ trong PPL, cho thấy giới hạn của hệ thống này.

**Chương 12: Logic Vị từ Quan hệ (RPL)**

- **Giới hạn của PPL:** Không thể phân tích các luận cứ dựa trên các quan hệ giữa nhiều đối tượng (ví dụ: "John yêu Mary. Vậy có thứ gì đó yêu ai đó."). PPL chỉ xem 'yêu Mary' là một vị từ thuộc tính đơn lẻ. RPL khắc phục điều này.
- **Quan hệ (Relations):** Các vị từ mô tả mối quan hệ giữa ít nhất hai thực thể.
- **Bậc (Adicity/Number of places):** Số lượng đối tượng mà quan hệ liên kết (ví dụ: 'loves' là quan hệ hai chỗ/dyadic, 'sits between' là ba chỗ/triadic). Ký hiệu bằng chỉ số trên (L2, S3...).
- **Quy ước 1: Số chỗ (Number):** Số chỗ của vị từ được thể hiện bằng chỉ số trên.
- **Quy ước 2: Thứ tự (Order):** Thứ tự của các thuật ngữ số ít trong ký hiệu RPL theo thứ tự xuất hiện của chúng trong câu tiếng Anh (từ trái sang phải).
- **Quy ước 3: Thể chủ động/bị động (Active/Passive Voice):** Các câu bị động được ký hiệu ở thể chủ động để giữ lại thông tin logic về quan hệ (ví dụ: "Harry được gọi bởi Mike" và "Mike gọi Harry" đều được ký hiệu là C2mh).
- **Quy ước 4: Lượng từ đơn lẻ (Single Quantifiers):**Trong RPL, lượng từ không thể đơn thuần đứng sau vị từ (ví dụ: L2j∃).
- Cần một cơ chế để xác định vị trí nào trong vị từ quan hệ mà lượng từ ràng buộc.
- **Biến (Variables):** Các chữ cái in thường (x, y, z) dùng làm vị trí giữ chỗ cho các lượng từ ràng buộc.
- **Quy ước 5: Biến và Lượng từ:** Lượng từ được đặt ở đầu công thức, theo sau là biến của nó trong ngoặc đơn (ví dụ: (∃x), (∀y)). Biến này sau đó xuất hiện trong vị trí của vị từ mà lượng từ ràng buộc (ví dụ: L2xy).
- **Quy ước 6: Biến và Vị từ Thuộc tính:** Biến cũng được sử dụng cho các vị từ thuộc tính (ví dụ: (∃x)T1x).
- **Nhận xét chung về biến:** Thứ tự loại biến được chọn là tùy ý, nhưng một khi đã gán biến cho một lượng từ, biến đó phải được sử dụng thống nhất trong toàn bộ phạm vi của lượng từ đó để chỉ rõ những vị trí nào trong vị từ được ràng buộc.
- **Ràng buộc biến (Binding Variables):** Biến phải nằm trong phạm vi của lượng từ tương ứng. Nếu không, phát biểu sẽ không hợp lệ.

**Chương 13: Logic Vị từ Quan hệ với Lượng từ Lồng nhau (Nested Quantifiers)**

- **Phát biểu đa tổng quát (Multiply General Statements):** Chứa nhiều hơn một lượng từ.
- **Lượng từ lồng nhau (Nested Quantifiers):** Một lượng từ nằm trong phạm vi của một lượng từ khác.
- **Quy trình Lượng từ Phổ quát (Universal Quantifier Procedure - quy trình (a)):** Chuyển đổi một phần của công thức dạng "... [∀α] ... [β] ..." thành "... ∀x (αx ⊃ βx) ...".
- **Quy trình Lượng từ Tồn tại (Existential Quantifier Procedure - quy trình (b)):** Chuyển đổi một phần của công thức dạng "... [∃α] ... [β] ..." thành "... ∃x (αx & βx) ...".
- **Ràng buộc biến phân biệt:** Mỗi lượng từ mới được giới thiệu phải ràng buộc một loại biến mới để tránh mơ hồ.
- **'Kicking out' (Đẩy ra):** Lượng từ được đẩy ra khỏi vị trí trung gian của nó và đặt ở vị trí tận cùng bên trái của công thức, giữ lại phạm vi của nó.
- **Thứ tự và Phạm vi (Order and Scope):** Thứ tự của các lượng từ trong ký hiệu logic phải phản ánh thứ tự của chúng trong câu tiếng Anh và phạm vi logic của chúng.
- **Công thức được tạo thành tốt trong RPL (Well-formedness in RPL):** Định nghĩa chặt chẽ các quy tắc ngữ pháp cho RPL, bao gồm các loại phát biểu đơn giản, phức hợp (phép nối, tuyển, điều kiện, phủ định), và các phát biểu lượng từ (phổ quát và tồn tại, có ràng buộc biến).

**Chương 14: Mở rộng Phương pháp Cây chân trị cho RPL**

- **Quy tắc mới:** Không cần quy tắc mới ngoài 10 quy tắc đã có (7 quy tắc PL và 3 quy tắc lượng từ PPL).
- **Chiến lược cho lượng từ lồng nhau:** Tiếp tục ưu tiên EQ trước UQ. Khi áp dụng UQ, instantiate cho các thuật ngữ số ít đã có trên nhánh.
- **Mô hình phản ví dụ trong RPL:** Các nhánh mở hoàn chỉnh trong cây chân trị RPL cung cấp một mô hình (tức là, một vũ trụ diễn ngôn gồm các cá thể và các gán giá trị chân trị cho các vị từ quan hệ và thuộc tính) làm cho tiền đề đúng và kết luận sai.

**Chương 15: Các Tinh chỉnh Lượng từ trong RPL**

- **Phủ định (Negation):** Ba loại phủ định trong RPL:
- **Phủ định phát biểu (Statement negation):** Phủ định toàn bộ phát biểu (phạm vi rộng nhất).
- **Phủ định vị từ (Predicate negation):** Phủ định một vị từ cụ thể.
- **Phủ định lượng từ (Quantifier negation):** Gắn phủ định vào phía trước lượng từ.
- **Quy tắc ngón tay cái:** Phủ định thường có phạm vi theo thứ tự tuyến tính trong câu tiếng Anh, nhưng có ngoại lệ (ví dụ: 'some... not' thường có 'some' phạm vi rộng hơn 'not').
- **'Only' như một lượng từ:** Tiếp tục ký hiệu 'Only α are β' là '∀x(βx ⊃ αx)', nhưng với các lượng từ lồng nhau.
- **Mệnh đề quan hệ hạn định (Restrictive Relative Clauses):** Tiếp tục ký hiệu như phép nối vị từ (ví dụ: 'man who has a son' = 'M1x & ∃y (S2xy)').
- **Quy chiếu và lượng hóa (Anaphora and Quantification):Vấn đề:** Đại từ quy chiếu (anaphoric pronoun) đến một lượng từ trong một mệnh đề có thể nằm ngoài phạm vi của lượng từ đó, dẫn đến phát biểu không hợp lệ (unbound variable).
- **Thuật toán sửa lỗi (Repair Algorithm):** Nếu biến nằm ngoài phạm vi của lượng từ tương ứng, hãy mở rộng phạm vi của lượng từ bằng cách di chuyển nó ra phía trước biểu thức. Có các quy tắc cụ thể cho từng loại liên từ.
- **Quy chiếu giữa các câu (Anaphora across Sentences):** Đại từ trong một câu có thể quy chiếu đến một lượng từ trong câu trước đó.
- **Giải pháp:** Chuyển đổi toàn bộ luận cứ thành một phát biểu điều kiện duy nhất (tiền đề là phép nối của các tiền đề, hậu tố là kết luận) và sau đó áp dụng thuật toán sửa lỗi.
- **Pronouns of Laziness (Đại từ lười biếng):** Đại từ đóng vai trò như một dạng rút gọn của cụm từ tiền đề đầy đủ, không nhất thiết cùng tham chiếu đến một đối tượng duy nhất.
- **E-type Pronouns (Đại từ kiểu E):** Một loại đại từ quy chiếu khác, nơi đại từ được diễn giải như một mô tả xác định ngầm (implicit definite description) của một tập hợp các đối tượng.

**Chương 16: Logic Vị từ Quan hệ với Đồng nhất (RPL=)**

- **Giới hạn của RPL:** Không thể phân tích các luận cứ dựa trên khái niệm đồng nhất (ví dụ: "Tác giả của Huckleberry Finn là tác giả của Tom Sawyer. Tác giả của Huckleberry Finn đến từ Missouri. Vậy tác giả của Tom Sawyer đến từ Missouri.").
- **Ký hiệu đồng nhất:** '=' (hai chỗ/dyadic). 'a = b' = 'a và b là cùng một cá thể'. 'a ≠ b' = 'a và b là khác nhau'.
- **Mở rộng phương pháp cây chân trị cho RPL=:** Bổ sung hai quy tắc mới:
- **Quy tắc Đồng nhất-ra (Identity-out Rule - IO):** Cho phép thay thế một thuật ngữ số ít bằng một thuật ngữ số ít khác mà nó đồng nhất trong một phát biểu (nếu a=b, thì bất cứ điều gì đúng về a cũng đúng về b).
- **Quy tắc Đồng nhất-vào (Identity-in Rule - II):** Cho phép thêm phát biểu 'a = a' vào bất kỳ nhánh mở nào. Quy tắc này cần thiết để đóng các nhánh có phủ định của sự tự đồng nhất (a ≠ a).
- **Các thuật ngữ phân biệt (Words of Distinction):** 'Except', 'but', 'other (than)', 'besides', 'else'. Các từ này được ký hiệu bằng cách thêm mệnh đề quan hệ phủ định đồng nhất (ví dụ: 'everyone except Bill left' = ∀x ((Px & x≠b) ⊃ Lx)).
- **Tính từ số lượng (Numerical Adjectives):** 'at least n', 'at most n', 'exactly n'.
- **'At least n':** Ký hiệu bằng n lượng từ tồn tại phân biệt và n(n-1)/2 điều kiện không đồng nhất (ví dụ: 'at least two students' = ∃x∃y (Sx & Sy & x≠y)).
- **'At most n' (No more than n):** Ký hiệu bằng n+1 lượng từ phổ quát và n(n+1)/2 điều kiện đồng nhất trong phép tuyển (ví dụ: 'at most one student' = ∀x∀y ((Sx & Sy) ⊃ x=y)).
- **'Exactly n':** Là phép nối của 'at least n' và 'at most n'.
- **Mô tả xác định (Definite Descriptions):** Các cụm danh từ bắt đầu bằng 'the'.
- **Vấn đề:** Ban đầu được coi là thuật ngữ số ít, nhưng không đủ để giải thích tính hiệu lực của một số luận cứ (ví dụ: "Tác giả của Huckleberry Finn sống ở New York. Shakespeare không sống ở New York. Vậy Shakespeare không phải là tác giả của Huckleberry Finn.").
- **Giải pháp (Russellian):** 'The α is β' được ký hiệu như một phép nối của ba điều kiện: tồn tại ít nhất một α, tồn tại nhiều nhất một α, và α là β (∃x (αx & ∀y (αy ⊃ y=x) & βx)).
- **Mô tả xác định như quy chiếu (Anaphors):** 'The waiter' trong "John tried to get the attention of a waiter, but the waiter pretended not to see him" được ký hiệu như một biến bị ràng buộc bởi lượng từ tồn tại của 'a waiter'.
- **Mô tả xác định số nhiều (Plural Definite Descriptions):** 'The founding fathers' được ký hiệu là '∃x (Fx & ∀y(Fy ⊃ y=x))' + '∀x (Fx ⊃ Wx)' (tồn tại ít nhất một và tất cả đều có thuộc tính).

**Chương 17: Động từ và Bổ ngữ của chúng**

- **Vấn đề của cụm giới từ (Prepositional Phrases):** Cách ký hiệu truyền thống không thể giải thích tại sao "The dog bit the man in the park" kéo theo "The dog bit the man".
- **Cách tiếp cận sự kiện (Event Approach):Nguyên tắc:** Mỗi động từ (hoặc hành động) được coi là một sự kiện. Động từ chuyển tiếp được ký hiệu là vị từ ba chỗ (vị trí thêm cho sự kiện). Các cụm giới từ được ký hiệu là vị từ hai chỗ mô tả sự kiện (ví dụ: 'bit' = B3xyz, 'in' = I2xy).
- **Ví dụ:** "The dog bit the man" = ∃x B3xdm. "The dog bit the man in the park" = ∃x (B3xdm & I2xp).
- **Ưu điểm:** Giải thích được các suy luận logic (ví dụ: loại bỏ cụm giới từ vẫn giữ chân trị), giải thích được sự mơ hồ về phạm vi lượng từ liên quan đến sự kiện (ví dụ: "Every woman moved the piano" có thể có nghĩa mỗi phụ nữ tham gia vào một lần di chuyển riêng, hoặc tất cả phụ nữ cùng di chuyển một lần duy nhất), và giải thích được việc hủy bỏ các suy luận hội thoại (ví dụ: "John hit Bill" không nhất thiết có nghĩa chỉ có một lần John đánh Bill).
- **Hỗ trợ gián tiếp cho cách tiếp cận sự kiện:Cố định tham chiếu và ràng buộc đại từ quy chiếu:** Các gerund (ví dụ: 'buttering') có thể đóng vai trò tiền đề cho đại từ 'it' (ví dụ: "John buttered his toast, and he did it after midnight").
- **Lượng hóa qua các sự kiện:** Cho phép giải thích sự mơ hồ về phạm vi của lượng từ liên quan đến sự kiện (ví dụ: "Every woman moved the piano").
- **Suy luận hội thoại và sự kiện:** Khẳng định một hành động không ám chỉ rằng nó chỉ xảy ra một lần.
- **Bổ ngữ trạng từ (Adverbial Modification):Vấn đề:** "Frank drove quickly" không thể được ký hiệu là phép nối (Frank drove AND Frank was quick) vì dẫn đến các suy luận không hợp lệ (ví dụ: "Frank talked, and Frank drove quickly" không kéo theo "Frank talked quickly").
- **Giải pháp của cách tiếp cận sự kiện:** Trạng từ được coi là vị từ một chỗ của sự kiện (ví dụ: 'quickly' = Q1x, B3xd = 'x là một hành động lái xe của d'). "Frank drove quickly" = ∃x (D2xf & Q1x).
- **Vấn đề với cách tiếp cận sự kiện:** Không hoạt động cho tất cả các bổ ngữ (ví dụ: 'allegedly' - "Orenthal allegedly killed his wife" không kéo theo "Orenthal killed his wife"). Những bổ ngữ này có thể là vị từ của câu, không phải của sự kiện.
- **Logic của Động từ nhận thức (Logic of Perceptual Verbs):** Cách tiếp cận sự kiện cũng được mở rộng cho các động từ nhận thức ('see', 'hear', 'watch'). Những gì được nhìn/nghe/quan sát là một sự kiện (ví dụ: "Frank saw Bill stab Jim" = ∃x (S3x b j & P3xfx)).

### III. Câu Đố Ngắn

**Hướng dẫn:** Trả lời mỗi câu hỏi trong 2-3 câu.

1. Nêu rõ sự khác biệt cơ bản giữa tính hiệu lực suy diễn (deductive validity) và tính đúng đắn (soundness) của một luận cứ.
2. Tại sao việc sử dụng dấu nháy đơn (' ') lại quan trọng trong logic, đặc biệt khi phân biệt giữa việc sử dụng (use) và đề cập (mention) một biểu thức?
3. Giải thích lý do tại sao phương pháp bảng chân trị không đủ để xác định tính hiệu lực của các luận cứ trong Logic Vị từ Thuộc tính (PPL).
4. Phân biệt giữa 'at least n' (ít nhất n) và 'at most n' (nhiều nhất n) khi ký hiệu các tính từ số lượng trong RPL=, tập trung vào sự khác biệt trong việc sử dụng lượng từ và điều kiện đồng nhất/không đồng nhất.
5. Trong Logic Mệnh đề, làm thế nào để các dấu nhóm (groupers), như dấu ngoặc đơn, giúp giải quyết vấn đề mơ hồ của các phát biểu phức hợp?
6. Giải thích tại sao từ 'and' trong tiếng Anh không phải lúc nào cũng được ký hiệu là phép nối logic '&' trong PL. Cung cấp một ví dụ.
7. Nêu lý do tại sao sách khẳng định rằng các câu điều kiện trong tiếng Anh nên được coi là các câu điều kiện vật chất (material conditionals) trong logic, ngay cả khi điều này có vẻ không trực quan đối với một số trường hợp.
8. Trong phương pháp cây chân trị, điều gì xảy ra khi một nhánh chứa một phát biểu và phủ định của chính nó? Điều này có ý nghĩa gì đối với tính hiệu lực của luận cứ?
9. Mô tả cách tiếp cận sự kiện (Event Approach) xử lý các trạng từ trong Logic Vị từ Quan hệ (RPL). Nêu một ưu điểm của cách tiếp cận này.
10. Điều gì thách thức ý tưởng ban đầu về việc coi các mô tả xác định (definite descriptions) là thuật ngữ số ít trong RPL, và RPL= khắc phục điều đó như thế nào?

### IV. Đáp án Câu Đố Ngắn

1. Tính hiệu lực suy diễn liên quan đến cấu trúc của luận cứ: nếu các tiền đề đúng, kết luận _phải_ đúng. Tính đúng đắn là một tính chất mạnh hơn, đòi hỏi luận cứ phải vừa có hiệu lực suy diễn VÀ tất cả các tiền đề thực tế đều đúng. Một luận cứ có thể có hiệu lực nhưng không đúng đắn (nếu các tiền đề của nó sai), nhưng một luận cứ đúng đắn thì luôn có hiệu lực.
2. Dấu nháy đơn được sử dụng để đề cập đến một biểu thức ngôn ngữ như một đối tượng của sự thảo luận, thay vì sử dụng biểu thức đó để chỉ một vật thể hoặc khái niệm. Điều này ngăn ngừa sự nhầm lẫn giữa bản thân từ và thứ mà từ đó đại diện, đảm bảo sự rõ ràng trong phân tích logic của ngôn ngữ.
3. Phương pháp bảng chân trị không đủ trong PPL vì nó được thiết kế để phân tích các phát biểu phức hợp dựa trên giá trị chân trị của các _phát biểu thành phần_ của chúng. Trong PPL, các phát biểu có cấu trúc bên trong phức tạp hơn (với vị từ, thuật ngữ số ít, lượng từ) mà các thành phần này (ví dụ: 'là chó') bản thân chúng không có giá trị chân trị đúng/sai, do đó bảng chân trị không thể áp dụng trực tiếp.
4. 'At least n' được ký hiệu bằng việc sử dụng n lượng từ tồn tại riêng biệt và thêm các điều kiện không đồng nhất để đảm bảo rằng các biến đó đề cập đến các đối tượng riêng biệt (ví dụ: ∃x∃y (Px & Py & x≠y)). Ngược lại, 'at most n' được ký hiệu bằng n+1 lượng từ phổ quát và thêm các điều kiện đồng nhất trong phép tuyển để đảm bảo rằng bất kỳ cá thể thứ n+1 nào có thuộc tính đó cũng phải đồng nhất với một trong n cá thể đầu tiên (ví dụ: ∀x∀y ((Px & Py) ⊃ x=y)).
5. Trong các phát biểu phức hợp, một liên từ có thể có phạm vi trên các thành phần khác nhau, dẫn đến nhiều cách diễn giải. Dấu ngoặc đơn chỉ rõ phạm vi chính xác của mỗi liên từ, loại bỏ sự mơ hồ. Ví dụ, 'It is not true that Bill is tall and Frank is tall' có thể là '-(B & F)' hoặc '-B & F', và dấu ngoặc đơn xác định rõ ý nghĩa nào được mong muốn.
6. Từ 'and' trong tiếng Anh không phải lúc nào cũng được ký hiệu là phép nối logic '&' vì đôi khi nó không chỉ ra rằng các thành phần có thể tách rời nhau mà vẫn giữ ý nghĩa ban đầu hoặc là phép nối logic theo định nghĩa nghiêm ngặt. Ví dụ: "Tom and William met" không có nghĩa là "Tom met and William met," vì động từ "met" yêu cầu nhiều hơn một chủ thể để xảy ra hành động gặp gỡ.
7. Sách lựa chọn coi các câu điều kiện trong tiếng Anh là câu điều kiện vật chất vì nó là dạng yếu nhất của câu điều kiện; nó chỉ sai khi tiền tố đúng và hậu tố sai. Bằng cách sử dụng cách diễn giải này, nếu một luận cứ là có hiệu lực, nó vẫn sẽ có hiệu lực dưới các diễn giải mạnh hơn (như nếu có một mối liên hệ nguyên nhân-kết quả thực sự), và không có nguy cơ kết luận sai về tính không hiệu lực.
8. Khi một nhánh trong cây chân trị chứa một phát biểu và phủ định của chính nó, nhánh đó được gọi là "đóng" và được đánh dấu bằng 'X'. Điều này cho thấy rằng trường hợp cụ thể đó dẫn đến mâu thuẫn. Nếu _tất cả_ các nhánh trong cây chân trị đóng, điều đó chứng minh rằng không thể xảy ra trường hợp các tiền đề đều đúng và kết luận sai, và do đó, luận cứ là có hiệu lực suy diễn.
9. Cách tiếp cận sự kiện xử lý các trạng từ bằng cách coi chúng là các vị từ một chỗ áp dụng cho các sự kiện (được giới thiệu bởi động từ). Ví dụ, "Frank drove quickly" được ký hiệu là ∃x (D2xf & Q1x), trong đó D2xf là "x là một sự kiện lái xe của Frank" và Q1x là "x là nhanh". Ưu điểm là nó giải thích tại sao "Frank talked, and Frank drove quickly" không kéo theo "Frank talked quickly" – vì sự kiện nói chuyện và sự kiện lái xe là khác nhau.
10. Thách thức chính là việc các mô tả xác định thường mang theo một điều kiện tồn tại và một điều kiện duy nhất mà cách ký hiệu thuật ngữ số ít không thể hiện. Ví dụ, "Tác giả của Huckleberry Finn sống ở New York" ngụ ý rằng có chính xác một người là tác giả của Huckleberry Finn và người đó sống ở New York. RPL= khắc phục điều này bằng cách ký hiệu mô tả xác định như một phép nối của ba phát biểu lượng tử hóa: tồn tại ít nhất một, tồn tại nhiều nhất một, và thuộc tính được gán.

### V. Năm Câu Hỏi Định dạng Bài Luận

**Hướng dẫn:** Hãy trả lời các câu hỏi sau trong một định dạng bài luận. Không cung cấp câu trả lời.

1. Thảo luận sâu sắc về tầm quan trọng của việc phân biệt giữa suy luận hội thoại (conversational inferences) và suy luận logic (deductive inferences) trong việc phân tích các luận cứ ngôn ngữ tự nhiên, đặc biệt là trong bối cảnh các câu điều kiện ('if, then') và các phép nối ('and', 'but'). Phân tích cách sách "Meaning and Argument" sử dụng sự phân biệt này để bảo vệ các quy ước ký hiệu logic tiêu chuẩn.
2. Giải thích cách Logic Vị từ Quan hệ (RPL) và Logic Vị từ Quan hệ với Đồng nhất (RPL=) vượt qua các giới hạn của Logic Mệnh đề (PL) và Logic Vị từ Thuộc tính (PPL) trong việc nắm bắt tính hiệu lực hình thức của các luận cứ. Cụ thể, hãy thảo luận về sự cần thiết của các biến, vị từ quan hệ và ký hiệu đồng nhất trong các hệ thống này.
3. Phân tích cách tiếp cận sự kiện (Event Approach) để ký hiệu động từ và bổ ngữ của chúng trong Logic Vị từ Quan hệ (RPL). Thảo luận các ưu điểm chính của cách tiếp cận này trong việc giải quyết các vấn đề liên quan đến suy luận logic và sự mơ hồ ngữ nghĩa, và cũng nêu ra một số hạn chế hoặc trường hợp ngoại lệ mà sách đề cập.
4. Trình bày chi tiết cách phương pháp cây chân trị được mở rộng từ Logic Mệnh đề sang Logic Vị từ Thuộc tính (PPL) và Logic Vị từ Quan hệ (RPL). Đặc biệt, hãy tập trung vào các quy tắc lượng từ mới (EQ, UQ, QE) và các chiến lược được khuyến nghị để quản lý việc xây dựng cây chân trị, bao gồm cả việc đối phó với các cây vô hạn và cách xây dựng mô hình phản ví dụ.
5. "Meaning and Argument" nhấn mạnh rằng việc ký hiệu ngôn ngữ tự nhiên sang ngôn ngữ hình thức không phải là một quá trình máy móc mà đòi hỏi sự suy nghĩ cẩn thận về ý nghĩa ngữ cảnh. Thảo luận quan điểm này bằng cách tham khảo các ví dụ về tính mơ hồ và sự phụ thuộc vào ngữ cảnh được đề cập trong sách (ví dụ: 'any', 'only', mô tả xác định, và các từ hạn định khác). Giải thích cách các quy ước ký hiệu của sách cố gắng giải quyết những thách thức này.

### VI. Bảng Thuật Ngữ Chính

- **Adicity (Bậc):** Số lượng "vị trí" hoặc đối tượng mà một vị từ quan hệ (relation predicate) liên kết. Ví dụ: vị từ thuộc tính (property predicate) là bậc một (monadic), vị từ quan hệ hai chỗ (dyadic relation) là bậc hai.
- **Anaphoric Pronoun (Đại từ quy chiếu):** Một đại từ mà tham chiếu của nó được xác định bởi một biểu thức tiền đề (antecedent expression) trong cùng câu hoặc đoạn văn.
- **Antecedent (Tiền tố):** Phần "if" của một câu điều kiện.
- **Argument (Luận cứ):** Một tập hợp các phát biểu, trong đó một (kết luận) được cho là được suy ra hoặc được bảo vệ bởi những phát biểu khác (tiền đề).
- **Atomic Statement (Phát biểu nguyên tử):** Một phát biểu đơn giản hoặc phủ định của một phát biểu đơn giản; không thể phân tích thêm trong hệ thống logic hiện tại.
- **Compound Predicate (Vị từ phức hợp):** Một vị từ được tạo thành từ các vị từ đơn giản hơn bằng cách sử dụng các liên từ (ví dụ: 'is either a dog or a sheep').
- **Compound Statement (Phát biểu phức hợp):** Một phát biểu được tạo thành từ các phát biểu đơn giản hơn bằng cách sử dụng các liên từ logic.
- **Conclusion (Kết luận):** Phát biểu được suy ra hoặc được bảo vệ trong một luận cứ.
- **Conditional (Câu điều kiện):** Một phát biểu có dạng "Nếu... thì...", sai khi tiền tố đúng và hậu tố sai. Ký hiệu: '⊃'.
- **Conjunction (Phép nối):** Một phát biểu phức hợp đúng khi và chỉ khi tất cả các thành phần của nó đều đúng. Ký hiệu: '&'.
- **Consistency (Tính nhất quán):** Một tập hợp các phát biểu là nhất quán nếu có ít nhất một trường hợp mà tất cả các phát biểu trong tập hợp đều đúng.
- **Contradiction (Mâu thuẫn):** Một phát biểu luôn sai, bất kể giá trị chân trị của các thành phần của nó.
- **Contraries (Tương phản):** Hai phát biểu không thể cùng đúng (nhưng có thể cùng sai).
- **Conversational Inference (Suy luận hội thoại):** Một suy luận mà người nghe rút ra dựa trên các quy tắc giao tiếp thông thường, không phải do ý nghĩa logic nghiêm ngặt của các từ. Những suy luận này có thể bị hủy bỏ (cancelable).
- **Counter-example/Counter-model (Mô hình phản ví dụ):** Một trường hợp (một cách gán giá trị chân trị hoặc một vũ trụ diễn ngôn) làm cho tất cả các tiền đề của một luận cứ đúng nhưng kết luận sai, từ đó chứng minh luận cứ không có hiệu lực.
- **Deductive Validity (Tính hiệu lực suy diễn):** Một luận cứ là có hiệu lực suy diễn nếu không thể xảy ra trường hợp các tiền đề của nó đều đúng và kết luận của nó sai.
- **Definite Description (Mô tả xác định):** Một cụm danh từ thường bắt đầu bằng 'the' (ví dụ: 'the author of Huckleberry Finn') được coi là ngụ ý sự tồn tại duy nhất của đối tượng được mô tả.
- **Deictic Pronoun (Đại từ chỉ định):** Một đại từ mà tham chiếu của nó phụ thuộc vào ngữ cảnh phi ngôn ngữ (ví dụ: cử chỉ chỉ tay).
- **Disjunction (Phép tuyển):** Một phát biểu phức hợp đúng khi và chỉ khi ít nhất một trong các thành phần của nó đúng. Ký hiệu: 'v'.
- **Domain of Discourse/Universe of Discourse (Vũ trụ diễn ngôn):** Tập hợp các đối tượng mà các lượng từ được cho là đang lượng hóa (quantifying over).
- **E-type Pronoun (Đại từ kiểu E):** Một loại đại từ quy chiếu được diễn giải như một mô tả xác định ngầm (implicit definite description) của một tập hợp các đối tượng, đặc biệt khi đại từ nằm ngoài phạm vi của tiền đề lượng từ của nó.
- **Event Approach (Cách tiếp cận sự kiện):** Một chiến lược ký hiệu động từ và bổ ngữ của chúng trong RPL bằng cách coi các hành động hoặc trạng thái là các "sự kiện" và lượng hóa qua chúng.
- **Existential Generalization (Tổng quát hóa tồn tại):** Một phát biểu khẳng định sự tồn tại của ít nhất một đối tượng có một thuộc tính hoặc mối quan hệ nhất định.
- **Existential Quantifier (Lượng từ tồn tại):** Một ký hiệu logic dùng để chỉ "có ít nhất một", "có một số". Ký hiệu: '∃'.
- **Formal Validity (Tính hiệu lực hình thức):** Một luận cứ có hiệu lực do cấu trúc logic của nó, không phụ thuộc vào ý nghĩa của các từ phi logic.
- **Groupers (Dấu nhóm):** Dấu ngoặc đơn '(', ')' được sử dụng để loại bỏ sự mơ hồ bằng cách chỉ rõ phạm vi của các liên từ trong các phát biểu phức hợp.
- **Identity-in Rule (Quy tắc Đồng nhất-vào):** Một quy tắc cây chân trị trong RPL= cho phép thêm 'a = a' vào bất kỳ nhánh mở nào.
- **Identity-out Rule (Quy tắc Đồng nhất-ra):** Một quy tắc cây chân trị trong RPL= cho phép thay thế một thuật ngữ số ít bằng một thuật ngữ số ít khác mà nó đồng nhất trong một phát biểu.
- **Inclusive 'Or' (Hoặc bao hàm):** Nghĩa của 'hoặc' trong logic, đúng khi ít nhất một tuyển từ đúng, bao gồm cả trường hợp cả hai cùng đúng.
- **Instantiation (Trường hợp cụ thể):** Việc thay thế một biến trong một phát biểu lượng tử hóa bằng một thuật ngữ số ít cụ thể.
- **Intransitive Relation (Quan hệ bắc cầu):** Một quan hệ R mà nếu a R b và b R c, thì a không R c (ví dụ: 'là cha của').
- **Irreflexive Relation (Quan hệ phản thân):** Một quan hệ R mà không cá thể nào có quan hệ R với chính nó (ví dụ: 'là mẹ của').
- **Logically Equivalent (Tương đương logic):** Hai phát biểu có cùng giá trị chân trị trong mọi trường hợp có thể.
- **Main Connective (Liên từ chính):** Liên từ có phạm vi rộng nhất trong một phát biểu phức hợp, xác định trạng thái logic của phát biểu.
- **Material Conditional (Câu điều kiện vật chất):** Một câu điều kiện được định nghĩa hoàn toàn bằng bảng chân trị của nó, đúng trong mọi trường hợp trừ khi tiền tố đúng và hậu tố sai.
- **Metalinguistic Variable (Biến siêu ngôn ngữ):** Một biến (thường là chữ cái Hy Lạp) dùng để thay thế cho các biểu thức ngôn ngữ nói chung, cho phép nói về các hình thức logic.
- **Multiply General Statement (Phát biểu đa tổng quát):** Một phát biểu chứa nhiều hơn một lượng từ.
- **Necessary Condition (Điều kiện cần):** Nếu α là điều kiện cần cho β, thì β không thể xảy ra nếu α không xảy ra (ký hiệu: β ⊃ α).
- **Negation (Phủ định):** Một phát biểu phức hợp đúng khi và chỉ khi phát biểu thành phần của nó sai. Ký hiệu: '-'.
- **Nested Quantifiers (Lượng từ lồng nhau):** Các lượng từ mà một trong số chúng nằm trong phạm vi của lượng từ khác.
- **Non-formal Validity (Tính hiệu lực phi hình thức):** Luận cứ có hiệu lực dựa vào ý nghĩa của các từ 'phi logic' của nó, không chỉ dựa vào hình thức.
- **Non-reflexive Relation (Quan hệ không phản thân):** Một quan hệ không hoàn toàn phản thân và không hoàn toàn phi phản thân (ví dụ: 'giết').
- **Non-symmetric Relation (Quan hệ không đối xứng):** Một quan hệ không đối xứng và không phản đối xứng (ví dụ: 'yêu').
- **Numerical Adjectives (Tính từ số lượng):** Các tính từ chỉ số lượng cụ thể (ví dụ: 'two', 'three', 'at least n', 'exactly n').
- **Passive Voice (Thể bị động):** Cấu trúc ngữ pháp mà chủ ngữ là người nhận hành động. Trong logic, thường được ký hiệu như thể chủ động.
- **Premise (Tiền đề):** Các phát biểu cung cấp cơ sở hoặc lý do cho kết luận trong một luận cứ.
- **Pronoun of Laziness (Đại từ lười biếng):** Một đại từ đóng vai trò như một dạng rút gọn của cụm từ tiền đề đầy đủ của nó.
- **Property Predicate (Vị từ thuộc tính):** Một vị từ mô tả một thuộc tính của một chủ ngữ đơn lẻ (còn gọi là vị từ một chỗ/monadic predicate).
- **Propositional Logic (PL) (Logic Mệnh đề):** Hệ thống logic cơ bản nhất, phân tích các luận cứ dựa trên mối quan hệ giữa các phát biểu như một toàn thể, không nhìn vào cấu trúc bên trong của chúng.
- **Quantifier (Lượng từ):** Một biểu thức chỉ số lượng (ví dụ: 'all', 'some', 'no').
- **Quantifier Exchange Rule (QE) (Quy tắc Trao đổi Lượng từ):** Một quy tắc cây chân trị cho phép chuyển đổi giữa phủ định của một lượng từ và lượng từ đối lập với phủ định bên trong (ví dụ: ¬∀x Px ≡ ∃x ¬Px).
- **Relational Predicate Logic (RPL) (Logic Vị từ Quan hệ):** Một mở rộng của PPL cho phép phân tích các luận cứ dựa trên các quan hệ giữa nhiều đối tượng.
- **Relational Predicate Logic with Identity (RPL=) (Logic Vị từ Quan hệ với Đồng nhất):** Một mở rộng của RPL bổ sung ký hiệu đồng nhất ('=') để phân tích các luận cứ dựa trên sự đồng nhất và khác biệt của các đối tượng.
- **Restrictive Relative Clause (Mệnh đề quan hệ hạn định):** Một mệnh đề quan hệ giới hạn hoặc xác định danh từ mà nó bổ nghĩa (ví dụ: 'the boys _whom I like_').
- **Scope (Phạm vi):** Phần công thức được tạo thành tốt ngắn nhất mà một ký hiệu (ví dụ: liên từ, lượng từ) xuất hiện và có tác dụng.
- **Soundness (Tính đúng đắn):** Một luận cứ là đúng đắn nếu nó vừa có hiệu lực suy diễn VÀ tất cả các tiền đề của nó đều đúng.
- **Statement (Phát biểu):** Bất kỳ câu khẳng định nào có thể đúng hoặc sai.
- **Statement Letter (Chữ cái phát biểu):** Một ký hiệu đơn lẻ (thường là chữ cái in hoa) đại diện cho một phát biểu đơn giản trong PL.
- **Statement Negation (Phủ định phát biểu):** Phủ định toàn bộ một phát biểu.
- **Subject (Chủ ngữ):** Đối tượng được nói đến trong một phát biểu.
- **Sufficient Condition (Điều kiện đủ):** Nếu α là điều kiện đủ cho β, thì nếu α xảy ra, β cũng xảy ra (ký hiệu: α ⊃ β).
- **Symmetric Relation (Quan hệ đối xứng):** Một quan hệ R mà nếu a R b, thì b R a (ví dụ: 'là họ hàng của').
- **Tautology (Luôn đúng):** Một phát biểu luôn đúng, bất kể giá trị chân trị của các thành phần của nó.
- **Transitive Relation (Quan hệ bắc cầu):** Một quan hệ R mà nếu a R b và b R c, thì a R c (ví dụ: 'lớn hơn').
- **Truth Table Method (Phương pháp bảng chân trị):** Một phương pháp hình thức để xác định giá trị chân trị của phát biểu hoặc tính hiệu lực của luận cứ bằng cách liệt kê tất cả các khả năng giá trị chân trị của các thành phần.
- **Truth Tree Method (Phương pháp cây chân trị):** Một phương pháp suy diễn hình thức để kiểm tra tính hiệu lực của luận cứ bằng cách cố gắng tạo ra một mô hình phản ví dụ (tức là, tiền đề đúng và kết luận sai).
- **Type/Token Distinction (Phân biệt loại/đơn vị):** Sự phân biệt giữa hình thức trừu tượng của một biểu thức (loại) và các lần xuất hiện cụ thể của nó (đơn vị).
- **Universal Generalization (Tổng quát hóa phổ quát):** Một phát biểu khẳng định rằng mọi đối tượng trong một phạm vi nhất định đều có một thuộc tính hoặc mối quan hệ nhất định.
- **Universal Quantifier (Lượng từ phổ quát):** Một ký hiệu logic dùng để chỉ "tất cả", "mọi". Ký hiệu: '∀'.
- **Universal Quantifier Rule (UQ) (Quy tắc Lượng từ Phổ quát):** Một quy tắc cây chân trị cho phép thêm bất kỳ trường hợp cụ thể nào của một phát biểu phổ quát vào một nhánh.
- **Use/Mention Distinction (Phân biệt sử dụng/đề cập):** Sự khác biệt giữa việc sử dụng một từ để chỉ thứ nó đại diện và việc đề cập đến bản thân từ đó.
- **Variable (Biến):** Một ký hiệu (thường là x, y, z) dùng làm vị trí giữ chỗ cho các lượng từ ràng buộc trong các phát biểu PPL và RPL.
- **Well-formed Formula (WFF) (Công thức được tạo thành tốt):** Một biểu thức ngữ pháp hợp lệ trong một hệ thống logic hình thức.