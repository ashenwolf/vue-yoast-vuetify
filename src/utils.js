
export function getBootstrapRatingVariant (rating) {
  switch (rating) {
    case 'na':
      return 'silver'
    case 'bad':
      return 'red'
    case 'ok':
      return 'orange'
    case 'good':
      return 'green'
  }
}

export function rateTitleLength (titleLength) {
  var rating;
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
  var rating;
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
