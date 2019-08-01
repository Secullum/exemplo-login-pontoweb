const iframe = document.createElement("iframe");

iframe.src =
  "https://autenticador.secullum.com.br/Authorization?response_type=code&iframe=1&client_id=3&redirect_uri=https://pontoweb.secullum.com.br/Auth";
iframe.height = "380px";
iframe.width = "320px";
iframe.scrolling = "no";
iframe.frameBorder = "0";

document.getElementById("secullum-login").appendChild(iframe);

window.addEventListener("message", function(event) {
  if (event.data && event.data.type === "SECULLUM-LOGIN") {
    location.href = event.data.data;
  }
});
