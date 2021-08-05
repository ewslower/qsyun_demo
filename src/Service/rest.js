/* jshint esversion: 6 */
import { Config } from './config'
import {
	message
} from 'antd';
// const dayjs = require('dayjs');
const { Host } = Config

const Get = (url, success, fail) => {
	const token = localStorage.getItem('token')

	fetch(Host + url, {
		method: 'GET',
		headers: {
		token: token,
		Accept: 'application/json',
		'Content-Type': 'application/json;charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.code === 200) {
				success(data)
			} else {
				message.error(data.message)
				fail(data)
			}
		})
		.catch((error) => {
			message.error(error)
		})
}

const GetQrCode = (url, success, fail) => {
	fetch(Host + url, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json;charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.code === 200) {
				success(data)
			} else {
				message.error(data.message)
			}
		})
		.catch((error) => {
			message.error(error)
		})
}

const DELETE = (url, success, fail) => {
	const token = localStorage.getItem('token')
	fetch(Host + url, {
		method: 'DELETE',
		headers: {
			token: token,
			Accept: 'application/json',
			'Content-Type': 'application/json;charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.code === 200) {
				success(data)
			} else {
				message.error(data.message)
			}
		})
		.catch((error) => {
			message.error(error)
		})
}

const ReviewPdf = (url, success, fail) => {
	const token = localStorage.getItem('token')
	fetch(Host + url, {
		method: 'GET',
		headers: {
			token: token,
			Accept: 'application/json',
			'Content-Type': 'application/json;charset=UTF-8',
		},
	})
		.then((response) => response.text())
		.then((data) => {
			success(data)
		})
		.catch((error) => {
			message.error(error)
		})
}

const Post = (url, params, success, fail) => {
	const token = localStorage.getItem('token')
	fetch(Host + url, {
		method: 'POST',
		headers: {
			token: token,
			Accept: 'application/json',
			'Content-Type': 'application/json;charset=UTF-8',
		},
		body: JSON.stringify(params),
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.code === 200) {
				success(data)
			} else {
				message.error(data.message)
			}
		})
		.catch((error) => {
			message.error(error)
		})
}

const PostImg = (params, success, fail) => {
	const token = localStorage.getItem('token')
	fetch(Host + params.imgUrl, {
		method: 'POST',
		headers: {
			token: token,
		},
		body: params.formData,
	})
		.then((response) => response.json())
		.then((data) => {
		if (data.code === 200) {
				success(data)
			} else {
				message.error(data.message)
			}
		})
		.catch((error) => {
			message.error(error)
		})
}

const DownloadFile = (params, success, fail) => {
	const token = localStorage.getItem('token')
	fetch(Host + params, {
		method: 'POST',
		headers: {
		token: token,
		},
	})
		.then((res) => {
			res.blob().then((blob) => {
				var a = document.createElement('a')
				var url = window.URL.createObjectURL(blob)
				var filename = params.split('name=')[1]
				a.href = url
				a.download = filename+'.docx';
				a.click()
				window.URL.revokeObjectURL(url)
			})
		})
		.catch((error) => message.error(error))
}

const PUT = (url, params, success, fail) => {
	const token = localStorage.getItem('token')
	fetch(Host + url, {
		method: 'PUT',
		headers: {
			token: token,
			Accept: 'application/json',
			'Content-Type': 'application/json;charset=UTF-8',
		},
		body: JSON.stringify(params),
	})
		.then((response) => response.json())
		.then((data) => {
		if (data.code === 200) {
			success(data)
		} else {
			message.error(data.message)
		}
		})
		.catch((error) => {
			message.error(error)
		})
}

const PostLogin = (url, params, success, fail) => {
	fetch(Host + url, {
		method: 'POST',
		headers: {
		Accept: 'application/json',
			'Content-Type': 'application/json;charset=UTF-8',
		},
		body: JSON.stringify(params),
	})
		.then((response) => response.json())
		.then((data) => {
		if (data.code === 200) {
				success(data)
			} else {
				fail(data)
			}
		})
		.catch((error) => {
			message.error(error)
		})
}

export { Get, Post, PostLogin, ReviewPdf, DELETE, PUT, PostImg, DownloadFile, GetQrCode }
