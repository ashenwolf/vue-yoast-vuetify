
export function getBootstrapRatingVariant (rating) {
  switch (rating) {
    case 'na':
      return 'default'
    case 'bad':
      return 'danger'
    case 'ok':
      return 'warning'
    case 'good':
      return 'success'
  }
}

export function rateTitleLength (titleLength) {
  let rating
  switch (true) {
    case titleLength > 0 && titleLength <= 399:
    case titleLength > 600:
      rating = 'ok'
      break

    case titleLength >= 400 && titleLength <= 600:
      rating = 'good'
      break

    default:
      rating = 'bad'
      break
  }
  return rating
}

export function rateMetaDescLength (metaDescLength) {
  let rating
  switch (true) {
    case metaDescLength > 0 && metaDescLength < 120:
    case metaDescLength > 320:
      rating = 'ok'
      break

    case metaDescLength >= 120 && metaDescLength <= 320:
      rating = 'good'
      break

    default:
      rating = 'bad'
      break
  }
  return rating
}

export default {
  getBootstrapRatingVariant,
  rateTitleLength,
  rateMetaDescLength
}
