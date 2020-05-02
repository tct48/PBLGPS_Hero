function hover(image) {
  if (image.id == "button1") {
    return image.setAttribute('src', '../../../../assets/image/01-2.gif')
  }
  return image.setAttribute('src', '../../../../assets/image/02-2.gif')
}

function unhover(image) {
  if (image.id == "button1") {
    return image.setAttribute('src', '../../../../assets/image/01.png')
  }
  return image.setAttribute('src', '../../../../assets/image/02.png')
}
