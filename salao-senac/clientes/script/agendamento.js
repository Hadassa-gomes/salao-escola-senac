let selectedButton = null;

function selectTime(time, user) {
    updateUserInfo(time, user);
}

function redirectToCalendar(employeeName) {
    // Redireciona para a página do calendário do funcionário
    window.location.href = `disponibilidade.html?employee=${encodeURIComponent(employeeName)}`;
}

function toggleTime(time, user, button) {
    // Verifica se o botão clicado já está selecionado
    if (selectedButton === button) {
        // Desmarca o botão
        clearUserInfo();
        selectedButton = null;
        button.classList.remove('selected'); // Remove a classe de seleção
    } else {
        // Marca o botão
        updateUserInfo(time, user);

        if (selectedButton) {
            selectedButton.classList.remove('selected'); // Remove a seleção do botão anterior
        }
        selectedButton = button; // Atualiza o botão selecionado
        button.classList.add('selected'); // Adiciona a classe de seleção
    }
}

function updateUserInfo(time, user) {
    const selectedTime = document.getElementById('selected-time');
    const userName = document.getElementById('user-name');
    const userInfo = document.getElementById('user-info');
    const teamInfo = document.getElementById('team-info');

    if (time && user) {
        selectedTime.textContent = time;
        userName.textContent = user;

        userInfo.style.display = 'block'; // Exibe informações do usuário
        teamInfo.style.display = 'block'; // Exibe a equipe
    }
}

function clearUserInfo() {
    const selectedTime = document.getElementById('selected-time');
    const userName = document.getElementById('user-name');
    const userInfo = document.getElementById('user-info');
    const teamInfo = document.getElementById('team-info');

    selectedTime.textContent = '';
    userName.textContent = '';
    userInfo.style.display = 'none'; // Esconde informações do usuário
    teamInfo.style.display = 'none'; // Esconde a equipe
}