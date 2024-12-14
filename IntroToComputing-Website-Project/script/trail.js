window.addEventListener("DOMContentLoaded", () => {
    const block_container = document.getElementById("blocks");
    const columns = Math.ceil(window.innerWidth / 70);
    const rows = Math.ceil(window.innerHeight / 70);
    const block_num = columns*rows;

    function createBlocks(){
        for(let i = 0; i < block_num; i++){
            const block = document.createElement("div");
            block.classList.add("block");
            block.dataset.index = i;
            block.addEventListener("mousemove", show);
            block_container.appendChild(block);
        }
    }

    function show(){
        this.classList.add("change_opacity")
        setTimeout(() => {
            this.classList.remove("change_opacity")
        }, 500);
    }

    createBlocks();
});