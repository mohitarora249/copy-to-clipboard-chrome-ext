const codeBlocks = document.getElementsByTagName("code");
const text = document.createElement("h3");
text.innerHTML = "Copied!";

const toast = document.createElement("div");
toast.style.visibility = "hidden";
toast.style.minWidth = "140px";
toast.style.minHeight = "40px";
toast.style.backgroundColor = "antiquewhite";
toast.style.borderRadius = "10px";
toast.style.position = "absolute";
toast.style.bottom = "5px";
toast.style.right = "10px";
toast.style.zIndex = "1";
toast.style.display = "flex";
toast.style.justifyContent = "center";
toast.style.alignItems = "center";
toast.appendChild(text);
document.body.appendChild(toast);

for (let i = 0; i < codeBlocks.length; i++) {
  const copyBtn = document.createElement("button");
  copyBtn.id = i;
  copyBtn.style.marginLeft = "5px";
  copyBtn.style.cursor = "pointer";
  copyBtn.style.marginRight = "5px";
  copyBtn.style.border = "1px solid dimgray";
  copyBtn.style.borderRadius = "10px";
  copyBtn.innerHTML = "Copy";
  copyBtn.onclick = () => {
    window.navigator.clipboard.writeText(codeBlocks[i].innerText);
    toast.style.visibility = "";
    setTimeout(() => {
      toast.style.visibility = "hidden";
    }, 2000);
  };
  codeBlocks[i].parentNode.insertBefore(copyBtn, codeBlocks[i].nextSibling);
}
