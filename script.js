function getpilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'jempol';
    if (comp >= 0.34 && comp < 0.67)
        return 'telunjuk';
    return 'kelingking';
}


function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'jempol')
        return (comp == 'telunjuk') ? 'MENANG!' : 'KALAH!';
    if (player == 'telunjuk')
        return (comp == 'jempol') ? 'KALAH!' : 'MENANG!';
    if (player == 'kelingking')
        return (comp == 'telunjuk') ? 'KALAH' : 'MENANG!';
}

function putar() {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['jempol', 'kelingking', 'telunjuk'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100)
}
/* const main = document.querySelector('.main');
main.addEventListener('click', function () {
    alert('oke');
}) */
const pilihan = document.querySelectorAll('li img');
let skorPlayer = 0;
let skorComputer = 0;
/* const tanya = prompt('Ingin Main Berapa Kali ? ')
for (i = 1; i < tanya; i++) { */
pilihan.forEach(function (img) {
    img.addEventListener('click', function () {
        const pilihanComputer = getpilihanComputer();
        const pilihanPlayer = img.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        putar();

        setTimeout(function () {
            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
            const c = document.querySelector('.score-comp');
            const p = document.querySelector('.score-player');
            if (hasil == 'MENANG!') {
                p.innerHTML = skorPlayer += 20;
                return skorPlayer;
            } else if (hasil == 'KALAH!') {
                c.innerHTML = skorComputer += 20;
                return skorComputer;
            }

            /* const uSkor = updateSkor(hasil); */
        }, 1000);
    });
});
