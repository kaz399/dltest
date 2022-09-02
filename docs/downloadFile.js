async function downloadPDF(url, filename) {
	const downloadButton = document.querySelector('#download-button');
	const messageArea = document.querySelector('#message-area');

	downloadButton.disabled = true;
	messageArea.innerHTML = "Generating now...";

	try {
		const image = await fetch(url, { mode: 'cors' });
		const blob = await image.blob();
		const blobData = await blob.text();

		messageArea.innerHTML = "data received";
		console.log(blobData)

		messageArea.innerHTML = "save file";
		await download('data:application/pdf;base64,' + blobData, filename, 'application/pdf');
		messageArea.innerHTML = "complete";
	} catch (e) {
		messageArea.innerHTML = e.toString();
		console.error(e);
	} finally {
		downloadButton.disabled = false;
	}
}


