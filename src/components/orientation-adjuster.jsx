'use client'
import {useState, useEffect} from 'react'

export default function OrientationAdjuster() {
	useEffect(() => {
		const fixViewport = () => {
			document.body.style.height = `${window.innerHeight}px`
		}

		window.addEventListener('resize', fixViewport)
		window.addEventListener('orientationchange', fixViewport)
		fixViewport() // Initial fix

		return () => {
			window.removeEventListener('resize', fixViewport)
			window.removeEventListener('orientationchange', fixViewport)
		}
	}, [])
}
