export type Product = {
  id: string;
  name: string;
  category: "Pertanian" | "Pestisida" | "Pupuk" | "Peralatan";
  price: number;
  description: string;
  image: string;
  benefits?: string[];
  stock: number;
};

export const products: Product[] = [

  {
    id: "2",
    name: "Bibit Padi Unggul Ciherang",
    category: "Pertanian",
    price: 85000,
    description: "Benih padi varietas Ciherang yang tahan wereng dan memiliki produktivitas tinggi. Cocok untuk lahan sawah irigasi maupun tadah hujan.",
    image: "/images/rice.png",
    benefits: ["Tahan hama wereng", "Umur panen pendek", "Nasi pulen"],
    stock: 120,
  },

  {
    id: "4",
    name: "Pupuk Organik Cair Baha",
    category: "Pupuk",
    price: 60000,
    description: "Pupuk organik cair fermentasi sempurna yang kaya akan nutrisi makro dan mikro untuk pertumbuhan tanaman yang optimal.",
    image: "/images/rice.png", // Reuse farming img
    benefits: ["Menyuburkan tanah", "Mempercepat pertumbuhan", "Ramah lingkungan"],
    stock: 200,
  },

  {
    id: "6",
    name: "Benih Jagung Hibrida",
    category: "Pertanian",
    price: 95000,
    description: "Benih jagung hibrida dengan tongkol besar dan hasil panen melimpah.",
    image: "/images/rice.png",
    benefits: ["Tongkol besar", "Tahan kekeringan", "Hasil panen tinggi"],
    stock: 80,
  },
  {
    id: "7",
    name: "Pestisida Nabati Anti-Hama",
    category: "Pestisida",
    price: 75000,
    description: "Pembasmi hama alami yang aman bagi lingkungan dan manusia. Efektif mengusir ulat dan kutu daun.",
    image: "/images/rice.png", // Placeholder
    benefits: ["Aman untuk lingkungan", "Tidak meninggalkan residu kimia", "Efektif basmi hama"],
    stock: 60,
  },
  {
    id: "8",
    name: "Cangkul Baja Asli",
    category: "Peralatan",
    price: 120000,
    description: "Cangkul dari bahan baja pilihan, kuat, tajam, dan tahan lama. Cocok untuk pengolahan lahan keras.",
    image: "/images/rice.png", // Placeholder
    benefits: ["Bahan baja kuat", "Anti karat", "Gagang nyaman"],
    stock: 25,
  },
   {
    id: "9",
    name: "NPK Mutiara 16-16-16",
    category: "Pupuk",
    price: 15000,
    description: "Pupuk majemuk NPK yang mengandung 16% Nitrogen, 16% Fosfat, dan 16% Kalium. Mempercepat pertumbuhan tunas dan buah.",
    image: "/images/rice.png", // Placeholder
    benefits: ["Nutrisi seimbang", "Mudah larut", "Tanaman lebih subur"],
    stock: 150,
  },



  {
    id: "13",
    name: "Hand Sprayer 2 Liter",
    category: "Peralatan",
    price: 45000,
    description: "Semprotan air tekanan udara manual ukuran 2 liter. Cocok untuk menyiram tanaman hias atau aplikasi pestisida skala kecil.",
    image: "/images/rice.png",
    benefits: ["Mudah digunakan", "Nozzle bisa diatur", "Bahan plastik tebal"],
    stock: 50,
  },
  {
    id: "14",
    name: "Sabit Rumput Baja",
    category: "Peralatan",
    price: 35000,
    description: "Sabit rumput tajam dari bahan baja per. Ringan dan kuat untuk membersihkan gulma atau memanen padi.",
    image: "/images/rice.png",
    benefits: ["Sangat tajam", "Ringan", "Anti sepuh"],
    stock: 75,
  },
  {
    id: "15",
    name: "Polybag 30x30 (1kg)",
    category: "Peralatan",
    price: 25000,
    description: "Plastik polybag kualitas super, ulet dan tidak mudah robek. Ukuran 30x30 cm, isi kurang lebih 50 lembar per kg.",
    image: "/images/rice.png",
    benefits: ["Bahan ulet", "Tahan matahari", "Lubang drainase rapi"],
    stock: 100,
  },
  {
    id: "16",
    name: "Benih Cabai Rawit Setan",
    category: "Pertanian",
    price: 20000,
    description: "Benih cabai rawit varietas unggul dengan tingkat kepedasan tinggi. Tahan terhadap penyakit patek/antraknosa.",
    image: "/images/rice.png",
    benefits: ["Sangat pedas", "Tahan penyakit", "Buah lebat"],
    stock: 200,
  },
  {
    id: "17",
    name: "Benih Terong Ungu",
    category: "Pertanian",
    price: 18000,
    description: "Benih terong ungu panjang hibrida. Daging empuk dan rasa manis, cocok untuk sambal balado.",
    image: "/images/rice.png",
    benefits: ["Pertumbuhan cepat", "Buah mengkilap", "Tahan simpan"],
    stock: 150,
  },
  {
    id: "18",
    name: "Insektisida Curacron",
    category: "Pestisida",
    price: 85000,
    description: "Insektisida racun kontak dan lambung untuk mengendalikan hama ulat grayak, kutu daun, dan trips pada tanaman sayuran.",
    image: "/images/rice.png",
    benefits: ["Cepat basmi hama", "Spektrum luas", "Ekonomis"],
    stock: 40,
  },
  {
    id: "19",
    name: "Fungisida Antracol",
    category: "Pestisida",
    price: 90000,
    description: "Fungisida kontak berbentuk tepung untuk mengendalikan penyakit jamur pada tanaman cabai, tomat, dan kentang.",
    image: "/images/rice.png",
    benefits: ["Zinc tinggi", "Melindungi daun", "Mencegah busuk"],
    stock: 35,
  },
  {
    id: "20",
    name: "Pupuk Urea Subsidi",
    category: "Pupuk",
    price: 12000,
    description: "Pupuk tunggal Nitrogen 46% untuk memacu pertumbuhan vegetatif tanaman (daun dan batang).",
    image: "/images/rice.png",
    benefits: ["Kadar N tinggi", "Daun lebih hijau", "Pertumbuhan cepat"],
    stock: 300,
  },
    {
    id: "21",
    name: "Sekop Taman Mini",
    category: "Peralatan",
    price: 15000,
    description: "Sekop kecil warna-warni untuk berkebun di pot atau polybag. Bahan besi coating anti karat.",
    image: "/images/rice.png",
    benefits: ["Praktis", "Warna menarik", "Anti karat"],
    stock: 80,
  },
  {
    id: "22",
    name: "Benih Kangkung Cabut",
    category: "Pertanian",
    price: 10000,
    description: "Benih kangkung darat yang bisa dipanen dalam 21 hari. Mudah tumbuh di pekarangan rumah.",
    image: "/images/rice.png",
    benefits: ["Panen cepat", "Perawatan mudah", "Rasa renyah"],
    stock: 500,
  }
];
