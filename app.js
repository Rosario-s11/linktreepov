const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)
async  function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute('link')

    try {
        await navigator.clipboard.writeText(link)
        alert("Copied!")
        console.log(link)
    } catch (err) {
        console.log(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))