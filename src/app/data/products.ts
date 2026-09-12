import { Product } from '../models/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Classmate Pulse A5 Ruled Notebook',
    category: 'Notebooks',
    price: 145,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=300&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=300&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1517842634367-57352b88191c?w=400&h=300&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=300&fit=crop&auto=format&q=80',
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
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&h=300&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&h=300&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=300&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=300&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop&auto=format&q=90',
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
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop&auto=format&q=85',
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
    image: 'https://images.unsplash.com/photo-1568205612837-01727e1e8b60?w=400&h=300&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=300&fit=crop&auto=format',
    description: 'Set of 6 neon-coloured square sticky note pads. 100 sheets per pad, repositionable adhesive. Perfect for reminders and study notes.',
    rating: 4.3,
    stock: 200
  },
  {
    id: 15,
    name: 'AmazonBasics Manila File Folders (50 Pack)',
    category: 'Files & Folders',
    price: 449,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1568205612837-01727e1e8b60?w=400&h=300&fit=crop&auto=format&q=80',
    description: 'Pack of 50 manila letter-size file folders with reinforced tabs. 1/3-cut assorted tab positions for organized filing.',
    rating: 4.2,
    stock: 60
  },
  {
    id: 16,
    name: 'Jinfeng A4 Plastic File Folder (10-Pack)',
    category: 'Files & Folders',
    price: 120,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop&auto=format&q=75',
    description: 'A4 size clear PP plastic file folders with snap button closure. Pack of 10 in assorted translucent colours. Water-resistant.',
    rating: 4.0,
    stock: 250
  },
  {
    id: 17,
    name: 'Casio MJ-12D Desktop Calculator',
    category: 'Calculators',
    price: 395,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format',
    description: '12-digit large display desktop calculator with tax and currency conversion. Dual power (solar + battery). Large buttons for comfortable use.',
    rating: 4.4,
    stock: 65
  },
  {
    id: 18,
    name: 'Casio FX-991EX Scientific Calculator',
    category: 'Calculators',
    price: 1299,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format&q=85',
    description: 'Advanced 552-function scientific calculator with high-resolution LCD display. QR code output, spreadsheet mode. Essential for engineering students.',
    rating: 4.8,
    stock: 40
  },
  {
    id: 19,
    name: 'Camel Artist Water Colour Cakes (24)',
    category: 'Art Supplies',
    price: 425,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=300&fit=crop&auto=format&q=75',
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
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop&auto=format&q=85',
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
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop&auto=format&q=82',
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
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop&auto=format&q=70',
    description: 'Premium 80 GSM A4 copy paper, 500 sheets per ream. Smooth surface for sharp print output. Compatible with all printers and copiers.',
    rating: 4.3,
    stock: 100
  },
  {
    id: 23,
    name: 'Kangaro Wooden Pen Holder',
    category: 'Desk Accessories',
    price: 199,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop&auto=format&q=78',
    description: 'Minimalist bamboo wood pen holder with 3 compartments. Holds pens, pencils, scissors, and small desk items. Eco-friendly natural finish.',
    rating: 4.2,
    stock: 75
  },
  {
    id: 24,
    name: 'Classmate School Combo Kit',
    category: 'Study Kits',
    price: 699,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&auto=format',
    description: 'Complete school kit: 3 notebooks, 5 pens, 2 pencils, eraser, sharpener, 15cm ruler, and zip pouch. Everything a student needs.',
    rating: 4.7,
    stock: 65
  }
];
