
      function detailsFunction() {
        let name = prompt("What is your name ?");
        let age = prompt("What is your age?");

        if (age >= 18) {
          let email = prompt("What is your email address ?");
          alert(
            "Thank you " +
              name +
              " for joining the newletter. We will sent an email of confirmation shortly at " +
              email +
              ", meanwhile have a lot of crepe 😊"
          );
        } else {
          alert(
            "Sorry " +
              name +
              " , you can't join the newsletter without your parents' approval. "
          );
        }
      }
      let loverbutton = document.querySelector(".button");
      loverbutton.addEventListener("click", detailsFunction);
    