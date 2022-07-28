async function downloadImage(url) {
	const downloadButton = document.querySelector('#download-button');
	downloadButton.disabled = true;

	const image = await fetch(url, { mode: 'cors' });
	const blob = await image.blob();
	const blobData = await blob.text();

	console.log(blobData)

	await download('data:image/png;base64,' + blobData, 'toio_id_4x4.png', 'image/png');

	downloadButton.disabled = false;
}


