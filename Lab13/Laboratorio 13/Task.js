class Task {
    constructor(desc, status) {
        this.desc = desc
        this.status = status
    }

    html(pos) {
        return `
        <div class="task">
            <p>${this.desc}</p>
            <button class="positive" onclick="updateTask(${pos})">+</button>
            <button class="negative" onclick="downTask(${pos})">-</button>
            <button class= "cerrar" onclick="removeTask(${pos})">X</button>
        </div>
        `
    }
}
