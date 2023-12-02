        const form = document.getElementById("form");
        const username = document.getElementById("exampleInputEmail1");
        const password = document.getElementById("password");

        //form表单提交事件
        form.addEventListener('submit',(e) =>{
            checkInputs();
            e.preventDefault();
        })

        //验证方法
        const usernamevalue = username.value.trim();
        const passwordvalue = password.value.trim();    
        //验证用户名
        if (usernamevalue ===""){
           setErrorrFor(exampleInputEmail1,"用户名不能为空","sml1");
        }else{
            setSuccessFor(username,"sml1");
        }
        //验证密码
        if (passwordvalue ===""){
            setErrorrFor(password,"密码不能为空","sml2");
        }else{
            setSuccessFor(password,"sml2");
        }

        //当验证失败时
        function setErrorrFor(input,message ,id){

            const formControl = input.parentElement;
            formControl.className = "form-group error";
            const small = formControl.querySelector("small");
            small.innerText = message;
            document.getElementById("id").style.visibility = "visible";
            formControl.classList.remove('success');
            formControl.classList.add("error");
        }
        //当验证成功时
        function setSuccessFor(input,id){
            const formControl = input.parentElement;
            formControl.className = "form-group success";
            const small = formControl.querySelector("small");
            small.innerText = "";
            document.getElementsById("id").style.visibility = "hidden";
            formControl.classList.remove('error');
            formControl.classList.add("success");
        }