function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    }
  );
  return vars;
}

function getSubject() {
  let subject = getUrlVars().subject;
  if (subject == undefined) {
    return ""
  } else {
    return unescape(subject);
  }
}

function replacetiming() {
  document.getElementsByClassName("branding")[0].innerHTML = " ";
}

function init() {
  setTimeout(replacetiming, 1000);
    document.getElementById("message").value = getSubject();

}

window.onload = init;
