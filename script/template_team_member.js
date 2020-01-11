const teamMembersData = loadTeamMembersData();

document.getElementsByClassName("team")[0].innerHTML = `${teamMembersData.map(loalTeamMemberTemplate).join('')}`;

function loalTeamMemberTemplate(teamMember) {
    return `
    <div class="team__item">
        <figure>
            <img class="team__photo" src="${teamMember.srcImg}" alt="person1">
            <figcaption class="team__name">${teamMember.firstName} ${teamMember.lastName}</figcaption>
        </figure>

        <p class="team__phone">
            <i class="fas fa-phone"></i>
            <a href="tel:${teamMember.phone}" title="Call me!">${teamMember.phone}</a>
        </p>
        <p class="team__mail">
            <i class="far fa-envelope"></i>
            <a href="mailto:${teamMember.email}" title="Write me!"
                target="_blank">${teamMember.email}</a>
        </p>

        <div class="team__network">
            <a href="${teamMember.linkedIn}" title="Visit my Linkedin page"
                target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="${teamMember.facebook}" title="Visit my Facebook page"
                target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="${teamMember.instagram}" title="Visit my Instagram page"
                target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
    </div>
    `
};
