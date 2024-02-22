function pregunta() {
    if (window.confirm("Quieres ser mi Pucca?")) {
      alert("Sabia que ibas a decir que si 😂");
      abrir();
      return;
    }
    alert("¿Cómo que no? 😐, te voy a dar otra oportunidad...");
    pregunta();
  }
  
  function abrir() {
    alert("TE AMOOOO 💕💕💕💕");
  }
  