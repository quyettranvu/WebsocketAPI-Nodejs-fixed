My notes during times learning Websocket is displayed in file explainaboutwebsocket.txt

To download datas from a remote respository to local respository incase we are on another branch in the remote respository"
git pull <remote> <local>
-> git pull origin main (if we already changed from master to main with: git branch -m master main)(check again with git status)
then we can push again with updates(git add) to remote respository: git push -u origin main
Giải thích: 
Về bản chất, Git Pull chính là sự kết hợp của 2 lệnh Git Fetch và Git Merge. Giai đoạn đầu, Git Pull sẽ thực thi lệnh Git Fetch ở phạm vi nhánh cục bộ mà HEAD được trỏ đến. Khi dữ liệu được tải xuống, Git Pull sẽ bắt đầu quy trình hợp nhất như Git Merge. Một merge commit mới sẽ được tạo và HEAD cũng được cập nhật để trỏ đến merge commit đó.

Git Fetch chỉ tải xuống nội dung từ Remote repository mà không làm thay đổi trạng thái của Local repository. Trong khi đó, Git Pull sẽ tải xuống nội dung và cố gắng thay đổi trạng thái của Local repository cho phù hợp với nội dung đó. Điều này có thể dẫn đến hiện tượng xung đột hợp nhất (merge-conflict) trong Git.

Việc sử dụng Git Fetch thường được dùng trong trường hợp có nhiều người làm việc trên cùng một nhánh. Còn Git Pull chỉ nên sử dụng khi có một người làm việc trên nhánh để hạn chế xung đột. Bạn chỉ nên dùng lệnh Git Pull trên một thư mục làm việc sạch (không có thay đổi đã cam kết).
