async function searchProfile() {
    const usernameInput = document.getElementById("username");
    const profile = document.getElementById("profile");
    const username = usernameInput.value.trim();

    if (!username) {
        profile.textContent = "Please enter a GitHub username.";
        profile.className = "error";
        return;
    }

    profile.className = "";
    profile.textContent = "Loading...";

    try {
        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}`
        );

        if (response.status === 404) {
            throw new Error("USER_NOT_FOUND");
        }

        if (!response.ok) {
            throw new Error("API_ERROR");
        }

        const data = await response.json();

        const card = document.createElement("div");
        card.className = "profile-card";

        const avatar = document.createElement("img");
        avatar.src = data.avatar_url;
        avatar.alt = "GitHub profile picture";
        card.appendChild(avatar);

        function addText(tag, text) {
            const element = document.createElement(tag);
            element.textContent = text;
            card.appendChild(element);
            return element;
        }

        addText("h2", data.name || "No name available");
        addText("p", `@${data.login}`);
        addText("p", data.bio || "No bio available");

        const stats = document.createElement("div");
        stats.className = "stats";

        [
            ["Repositories", data.public_repos],
            ["Followers", data.followers],
            ["Following", data.following]
        ].forEach(([label, value]) => {
            const item = document.createElement("div");

            const title = document.createElement("p");
            title.textContent = label;

            const number = document.createElement("span");
            number.textContent = value;

            item.append(title, number);
            stats.appendChild(item);
        });

        card.appendChild(stats);

        addText("p", `📍 ${data.location || "Location not available"}`);

        const link = document.createElement("a");
        link.href = data.html_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.className = "profile-link";
        link.textContent = "View GitHub Profile";

        card.appendChild(link);

        profile.replaceChildren(card);

    } catch (error) {
        profile.className = "error";

        if (error.message === "USER_NOT_FOUND") {
            profile.textContent = "GitHub user not found. Check the username.";
        } else if (error.message === "API_ERROR") {
            profile.textContent =
                "GitHub API error. Please try again later.";
        } else {
            profile.textContent =
                "Network error. Check your internet connection or browser console.";
            console.error("GitHub Profile Finder error:", error);
        }
    }
}
