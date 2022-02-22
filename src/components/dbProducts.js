const tableProducts = [
        { id: 1, stock: 5,  name: 'Nuc Intel mini PC', description: 'intel Core i5 mini pc 1cpu 2cores 8threads, ssd 240gb, 16gb ram', image: './image/nuc.jpg', price: '125000' },
        { id: 2, stock: 10, name: 'PC Industrial Fanless', description: 'Celeron 2core 4threads 4ghz, 8gb ram, ssd 64gb', image: './image/industrial_pc.jpg', price: '65000'  },
        { id: 3, stock: 3,  name: 'Netgate pfsense', description: 'Firewall pfsense sobre plataforma de HW Netgate', image: './image/netgate.jpg' , price: '105000' },
];

export const dbProducts = new Promise((res, rej) => {
        setTimeout(() => {
        res(tableProducts);
        }, (Math.random() * 2000)+2000);
    });