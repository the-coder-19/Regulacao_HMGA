function login() 
    {
      const login = document.getElementById("login").value;
      const senha = document.getElementById("senha").value;
      var correctCPF = 99999999999;
      var correctPass = 12345678;
      


      if(login == correctCPF && senha == correctPass)
      {
        window.location.href='pesquisa.html';
      }

      else

      {
        alert("Login ou senha incorretos ou vazios, por favor verifique.")
      }

    }
