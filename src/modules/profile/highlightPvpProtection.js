export default function highlightPvpProtection() {
  var pvpp = document
    .querySelector('#profileLeftColumn a[href="index.php?cmd=points"]');
  if (pvpp.parentNode.nextSibling.textContent.trim() !== 'N/A') {
    pvpp.parentNode.parentNode.style.cssText = 'border: 3px solid red';
  }
}