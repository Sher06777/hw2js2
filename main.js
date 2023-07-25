const func1 = (delay) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            const block = document.createElement(`div`);
            block.className = 'block';
            document.getElementById(`box`).appendChild(block);
            resolve();
        }, delay);
    });
};


async function func2() {
    for (let i = 0; i < 4; i++) {
        await func1(1000)
    }
}

func2()