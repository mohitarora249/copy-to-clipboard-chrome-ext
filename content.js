const codeBlocks = document.getElementsByTagName("code");

for (elem of codeBlocks) {
  const copyBtn = document.createElement("button");
  copyBtn.style.marginLeft = "5px";
  copyBtn.style.marginRight = "5px";
  copyBtn.style.border = "1px solid dimgray";
  copyBtn.style.borderRadius = "10px";
  copyBtn.innerHTML = "Copy";
  copyBtn.addEventListener("click", () =>
    window.navigator.clipboard.writeText(elem.innerText)
  );
  elem.appendChild(copyBtn);
}
