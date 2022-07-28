async function downloadImage(url) {
	const image = await fetch(url, { mode: 'cors' });
	const blob = await image.blob();

	console.log(blob)

	await download('data:image/png;base64,' + blob, 'toio_id_4x4.png', 'image/png');
}


