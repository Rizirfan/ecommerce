import { Product } from '../models/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Classmate Pulse A5 Ruled Notebook',
    category: 'Notebooks',
    price: 145,
    discount: 10,
    image: 'https://imgs.search.brave.com/xZr97Du1qg6uabuvwfPmNbKSTnSmq5-fzktzdCHJq8o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFtcVNjUEc1VUwu/anBn',
    description: 'Premium 200-page A5 ruled notebook with thick 70 GSM paper. Smooth writing surface, ideal for college notes and daily journaling. Durable cover with lay-flat binding.',
    rating: 4.5,
    stock: 120
  },
  {
    id: 2,
    name: 'Classmate Spirit Spiral Notebook',
    category: 'Notebooks',
    price: 95,
    discount: 5,
    image: 'https://imgs.search.brave.com/3Yljk4b8WUArc_GkC43I2rEyI6P-l1d96QPI2mc3S_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFtMGVIQmd5S0wu/anBn',
    description: '172-page spiral-bound ruled notebook with 72 GSM maplitho paper. Single line format, perfect for everyday classroom use.',
    rating: 4.3,
    stock: 200
  },
  {
    id: 3,
    name: 'Leuchtturm1917 A5 Dotted Journal',
    category: 'Notebooks',
    price: 899,
    discount: 15,
    image: 'https://imgs.search.brave.com/3Yljk4b8WUArc_GkC43I2rEyI6P-l1d96QPI2mc3S_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFtMGVIQmd5S0wu/anBn',
    description: 'Premium A5 dotted hardcover journal with 251 numbered pages, table of contents, and acid-free 80 GSM paper. Archival quality for bullet journaling.',
    rating: 4.8,
    stock: 35
  },
  {
    id: 4,
    name: 'Pilot Pocket Notebook (3-Pack)',
    category: 'Notebooks',
    price: 199,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&auto=format&fit=crop&q=80',
    description: 'Set of 3 pocket-sized (A6) softcover notebooks. 64 pages each, 80 GSM paper. Compact and portable for quick notes on the go.',
    rating: 4.2,
    stock: 80
  },
  {
    id: 5,
    name: 'Cello Butterflow Ballpoint Pen (Pack of 10)',
    category: 'Pens',
    price: 89,
    discount: 0,
    image: 'https://cpimg.tistatic.com/5662218/b/4/cello-butterflow-ball-pen-set-pack-of-10-blue-.jpg',
    description: 'Smooth-writing ballpoint pens with ergonomic rubber grip and medium 0.7mm tip. Pack of 10 blue ink pens for everyday writing.',
    rating: 4.2,
    stock: 300
  },
  {
    id: 6,
    name: 'Pilot G2 Premium Gel Pen (Pack of 6)',
    category: 'Pens',
    price: 180,
    discount: 5,
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80',
    description: 'Retractable gel ink pen with smooth consistent ink flow and comfortable rubber grip. Fine point 0.7mm. Pack of 6 assorted colors.',
    rating: 4.7,
    stock: 150
  },
  {
    id: 7,
    name: 'Staedtler Triplus Fineliner Set',
    category: 'Pens',
    price: 349,
    discount: 10,
    image: 'https://shoukatsons.pk/cdn/shop/products/staedtlertriplusfineliner20colors.png',
    description: 'Set of 20 color fineliner pens with 0.3mm tip. DRY Safe technology, dry-erase safe and water-based ink. Ideal for note-taking and coloring.',
    rating: 4.6,
    stock: 70
  },
  {
    id: 8,
    name: 'Nataraj 621 HB Pencil Set (Pack of 10)',
    category: 'Pencils',
    price: 45,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?w=600&auto=format&fit=crop&q=80',
    description: 'Pack of 10 premium HB graphite pencils with smooth lead core. Hexagonal barrel for comfortable grip. Perfect for writing and exam use.',
    rating: 4.3,
    stock: 250
  },
  {
    id: 9,
    name: 'Rotring 600 Mechanical Pencil 0.5mm',
    category: 'Pencils',
    price: 1499,
    discount: 20,
    image: 'https://www.penboutique.com/cdn/shop/products/rotring-600-black-barrel-0.5mm-mechanical-pencil-slanted.jpg?v=1562366838&width=1920',
    description: 'Professional-grade mechanical pencil with brass mechanism, fixed lead guidance sleeve, and knurled metal grip. 0.5mm lead size for precision drawing.',
    rating: 4.9,
    stock: 20
  },
  {
    id: 10,
    name: 'Faber-Castell Colour Pencils (24 Shades)',
    category: 'Pencils',
    price: 299,
    discount: 10,
    image: 'https://bf1af2.akinoncloudcdn.com/products/2024/09/23/145236/ac907e6d-132c-4f29-b19b-1cf386ef30c7.jpg',
    description: 'Set of 24 vibrant colour pencils with break-resistant SV-bonded lead. Smooth colour laydown with rich pigments. Ideal for school art projects.',
    rating: 4.6,
    stock: 90
  },
  {
    id: 11,
    name: 'Stabilo Boss Original Highlighter (6-Pack)',
    category: 'Highlighters',
    price: 210,
    discount: 5,
    image: 'https://imgs.search.brave.com/dlExa_4K_AXoHON4wGCv-HxEQKp4g9pig4YTNH-zQp8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9za3li/bHVlLmluL2Nkbi9z/aG9wL3Byb2R1Y3Rz/LzM3MDc3XzFfODAw/eC5qcGc_dj0xNjM1/MjUxODQ3',
    description: 'Pack of 6 pastel fluorescent highlighters with wide chisel tip (2-5mm). Smudge-free ink, ergonomic shape. Iconic flat design.',
    rating: 4.5,
    stock: 140
  },
  {
    id: 12,
    name: 'Camlin Kokuyo Highlighter Neon (Pack of 5)',
    category: 'Highlighters',
    price: 85,
    discount: 0,
    image: 'https://imgs.search.brave.com/hmgJvXvuESfUs1SrHS0e7QPqnHXGRIAGa-CM1si3Wmo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFyWjJ3WU53MEwu/anBn',
    description: 'Set of 5 neon chisel-tip highlighters in vibrant fluorescent colours. Quick-dry water-based ink prevents smearing. Budget-friendly.',
    rating: 4.1,
    stock: 180
  },
  {
    id: 13,
    name: 'Post-it Super Sticky Notes (4-Pack)',
    category: 'Sticky Notes',
    price: 225,
    discount: 10,
    image: 'https://media.officedepot.com/images/f_auto%2Cq_auto%2Ce_sharpen%2Ch_450/products/584295/584295_o01_031424/584295',
    description: 'Pack of 4 pads (76x76mm) in assorted neon colours. 3x stronger adhesive sticks securely and removes cleanly. 100 sheets per pad.',
    rating: 4.4,
    stock: 160
  },
  {
    id: 14,
    name: 'Kokuyo Self-Sticky Notes Square (6-Pack)',
    category: 'Sticky Notes',
    price: 130,
    discount: 5,
    image: 'https://imgs.search.brave.com/hpcGSCJHfqev2F8mers3aGItJfxqDy9tyqiNojFLQms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFUdkt0ayt2Wkwu/anBn',
    description: 'Set of 6 neon-coloured square sticky note pads. 100 sheets per pad, repositionable adhesive. Perfect for reminders and study notes.',
    rating: 4.3,
    stock: 200
  },

  {
    id: 19,
    name: 'Camel Artist Water Colour Cakes (24)',
    category: 'Art Supplies',
    price: 425,
    discount: 10,
    image: 'https://www.satyamstationers.com/cdn/shop/files/Picsart-24-02-13_15-21-36-284.jpg',
    description: 'Set of 24 artist-grade water colour cakes in a sturdy metal tin. Rich, vibrant pigments with smooth blending and easy water activation.',
    rating: 4.6,
    stock: 50
  },
  {
    id: 20,
    name: 'Faber-Castell Wax Crayons (25 Shades)',
    category: 'Art Supplies',
    price: 165,
    discount: 0,
    image: 'https://imgs.search.brave.com/jXCkYPH5lzTvLbxh6n-kckvP7dLN7CfE9W5os9dF5fE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF3TmJvZk9EYUwu/anBn',
    description: 'Set of 25 non-toxic wax crayons in vibrant colours. Smooth texture for easy drawing. Break-resistant with bright, bold pigments.',
    rating: 4.4,
    stock: 120
  },
  {
    id: 21,
    name: 'Faber-Castell Connector Pens (25 Pack)',
    category: 'Art Supplies',
    price: 320,
    discount: 5,
    image: 'https://imgs.search.brave.com/903ij8NJ1CmqToDkXu6lq82bt_qalb0KFzvok8KiPjo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rdW5k/YW50cmFkZXJzLmNv/LmluL2Nkbi9zaG9w/L3Byb2R1Y3RzL0Zh/YmVyLUNhc3RlbGwt/Q29ubmVjdG9yLVBl/bnMtUGFjay1vZi0x/MC1QZW5zXzMyMHgu/anBnP3Y9MTY2NTU3/MjIzMA',
    description: 'Set of 25 connector tip sketch pens in assorted colours. Fine 1.0mm tip for detailed drawing. Water-based, washable ink. Connectable caps.',
    rating: 4.5,
    stock: 100
  },
  {
    id: 22,
    name: 'Double A A4 Copier Paper (500 Sheets)',
    category: 'Papers & Note Pads',
    price: 310,
    discount: 5,
    image: 'https://imgs.search.brave.com/Hqs3Gw5eytXMXUWkF5_oHInVoASqjZPAuwFYPkLBYWI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFBamZaQXlRaEwu/anBn',
    description: 'Premium 80 GSM A4 copy paper, 500 sheets per ream. Smooth surface for sharp print output. Compatible with all printers and copiers.',
    rating: 4.3,
    stock: 100
  }
];
