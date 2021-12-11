const codeBlocks = document.getElementsByTagName("code");

for (let i = 0; i < codeBlocks.length; i++) {
  const copyBtn = document.createElement("button");
  copyBtn.id = i;
  copyBtn.style.marginLeft = "5px";
  copyBtn.style.marginRight = "5px";
  copyBtn.style.border = "1px solid dimgray";
  copyBtn.style.borderRadius = "10px";
  copyBtn.innerHTML = "Copy";
  copyBtn.onclick = () => {
    window.navigator.clipboard.writeText(codeBlocks[i].innerText);
  };
  codeBlocks[i].appendChild(copyBtn);
}
