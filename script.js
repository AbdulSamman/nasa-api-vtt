const nasaDate = document.getElementById("date");
const nasaImg = document.querySelector("img");
const nasaCopyright = document.getElementById("copyright");
const nasaExplanation = document.getElementById("explanation");
const imgTitle = document.getElementById("imgtitle");
const videoTrack = document.getElementById("video");

const apiNasa = `https://api.nasa.gov/planetary/apod`;
const apiNasaInfo = `http://images-assets.nasa.gov`;

async function getInfo() {
  try {
    API_KEY = `?api_key=PLinv0hjUwz9ck4SOBd0Gohde0juCS5JwaR8fX7U`;
    const query = `/video/172_ISS-Slosh/172_ISS-Slosh.srt`;
    const nasaInfo = await fetch(apiNasaInfo + query);
    const dataInfo = await nasaInfo.text();
  } catch (error) {
    console.log("getInfo", error);
  }
}
getInfo();

async function getBmi() {
  try {
    API_KEY = `?api_key=PLinv0hjUwz9ck4SOBd0Gohde0juCS5JwaR8fX7U`;

    const response = await fetch(apiNasa + API_KEY);

    const data = await response.json();

    if (!response.ok) throw new Error("konnte nicht geladen werden");

    const copyRight = data.copyright;
    const date = data.date;
    const img = data.url;
    const title = data.title;
    const explanation = data.explanation;
    nasaDate.textContent = date;
    nasaImg.src = img;
    imgTitle.textContent = title;
    nasaCopyright.innerHTML = `<span style=" font-weight:bold">Image Credit & Copyright: </span> ${copyRight} (Utah Desert Remote Observatories)`;
    nasaExplanation.innerHTML = `<span style="font-size:1.5rem; font-weight:bold">Explanation:</span> ${explanation}`;
  } catch (error) {
    console.log(error);
  }
}
getBmi();
