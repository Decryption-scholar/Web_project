// 封装函数以加载新页面并更新用户信息
function UpdUserInfo(pageUrl) {
    const usrData = JSON.parse(localStorage.getItem('usrData')) || [];
    const logInUser = usrData.find(user => user.logSta === 1);
    const quitLinks = document.querySelectorAll('.quit');
    const usernmtx = document.getElementById('Username');

    if (logInUser) {
      usernmtx.innerText = logInUser.username;

      quitLinks.forEach(link => {
        link.textContent = '退出';
        link.addEventListener('click', function (event) {
          event.preventDefault();

          const index = usrData.findIndex(user => user.logSta === 1);
          if (index !== -1) {
            usrData[index].logSta = 0;
            localStorage.setItem('usrData', JSON.stringify(usrData));
            window.location.href = 'login.html';
          }
        });
      });
    } else {
      usernmtx.innerText = '未登录';

      quitLinks.forEach(link => {
        link.textContent = '登录';
        link.addEventListener('click', function (event) {
          event.preventDefault();
          window.location.href = 'login.html';
        });
      });
    }

    // 设置 iframe 的 src 属性以加载新页面
    const iframebody = document.getElementById('iframebody');
    iframebody.src = pageUrl;
  }