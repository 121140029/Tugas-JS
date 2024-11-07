function calculateGrade() {
    const assignmentWeight = 0.3;
    const midtermWeight = 0.3;
    const finalWeight = 0.4;
    const passingGrade = 60;

    let assignmentScore = parseFloat(document.getElementById("assignment").value);
    let midtermScore = parseFloat(document.getElementById("midterm").value);
    let finalScore = parseFloat(document.getElementById("final").value);

    if (isNaN(assignmentScore) || isNaN(midtermScore) || isNaN(finalScore)) {
        alert("Harap masukkan nilai yang valid!");
        return;
    }

    if (assignmentScore < 0 || assignmentScore > 100 ||
        midtermScore < 0 || midtermScore > 100 ||
        finalScore < 0 || finalScore > 100) {
        alert("Nilai harus di antara 0 dan 100.");
        return;
    }

    let weightedAverage = (assignmentScore * assignmentWeight) +
                          (midtermScore * midtermWeight) +
                          (finalScore * finalWeight);
    
    let grade;
    if (weightedAverage >= 90) grade = 'A';
    else if (weightedAverage >= 80) grade = 'B';
    else if (weightedAverage >= 70) grade = 'C';
    else if (weightedAverage >= 60) grade = 'D';
    else grade = 'E';

    let resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `
        <h3>Hasil Perhitungan Nilai</h3>
        <p>Nilai Tugas: ${assignmentScore} (30%)</p>
        <p>Nilai UTS: ${midtermScore} (30%)</p>
        <p>Nilai UAS: ${finalScore} (40%)</p>
        <p>Rata-rata Tertimbang: ${weightedAverage.toFixed(2)}</p>
        <p>Grade: ${grade}</p>
        <p class="${weightedAverage >= passingGrade ? 'pass' : 'fail'}">
            Status: ${weightedAverage >= passingGrade ? 'Lulus' : 'Gagal'}
        </p>
    `;
}
