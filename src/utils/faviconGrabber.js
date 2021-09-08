import axios from 'axios'

export const faviconGrabber = async (url) => {
  let favicon = null
	const domain = url.split('://').length === 1 ? url : url.split('://')[1]
  try {
    const response = await axios.get(
      'https://favicongrabber.com/api/grab/' + domain
    )
    favicon = response.data.icons[0]
  } catch (error) {
    console.error(error)
  }
	return favicon
}
