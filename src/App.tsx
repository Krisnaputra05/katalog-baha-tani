import { useState } from "react";
import { products } from "@/data/plants";
import type { Product } from "@/data/plants";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Leaf, Sprout, Phone, MapPin, Menu, Facebook, Instagram, Twitter, Building2, Hammer, Droplets } from "lucide-react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [

    { id: "Pertanian", label: "Bibit Pertanian", icon: <Sprout className="w-5 h-5"/> },
    { id: "Pupuk", label: "Pupuk & Nutrisi", icon: <Droplets className="w-5 h-5"/> },
    { id: "Pestisida", label: "Pestisida", icon: <Droplets className="w-5 h-5 text-red-400"/> }, // Reusing icon for now
    { id: "Peralatan", label: "Peralatan", icon: <Hammer className="w-5 h-5"/> },
  ];
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState({}, '', '/');
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', `/${id}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <div className="bg-primary/10 p-2 rounded-full"> */}
              <img src="/images/logo.png" alt="Logo Kios Baha Tani" className="h-10 w-10 object-contain" />
            {/* </div> */}
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400">
              Kios Baha Tani
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/" onClick={(e) => scrollToSection(e, 'top')} className="font-medium text-sm hover:text-primary transition-colors">Beranda</a>
            <a href="/katalog" onClick={(e) => scrollToSection(e, 'katalog')} className="font-medium text-sm hover:text-primary transition-colors">Katalog</a>
            <a href="/about" onClick={(e) => scrollToSection(e, 'about')} className="font-medium text-sm hover:text-primary transition-colors">Tentang Kami</a>
            <a href="/contact" onClick={(e) => scrollToSection(e, 'contact')} className="font-medium text-sm hover:text-primary transition-colors">Kontak</a>
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari produk..."
                className="pl-8 h-9 bg-muted/50 border-none focus-visible:ring-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-8">
                   <a href="/" onClick={(e) => scrollToSection(e, 'top')} className="text-lg font-medium">Beranda</a>
                   <a href="/katalog" onClick={(e) => scrollToSection(e, 'katalog')} className="text-lg font-medium">Katalog</a>
                   <a href="/about" onClick={(e) => scrollToSection(e, 'about')} className="text-lg font-medium">Tentang Kami</a>
                    <a href="/contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-lg font-medium">Kontak</a>
                   <Input
                      type="search"
                      placeholder="Cari produk..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-[650px] w-full overflow-hidden flex items-center justify-center">

        <div className="absolute inset-0">
            <img 
                src="/images/hero.png" 
                alt="Pertanian Modern" 
                className="w-full h-full object-cover brightness-[0.35]"
            />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4 text-white border-white/50 backdrop-blur-md px-4 py-1 uppercase tracking-wider">
                Mitra Pertanian Terpercaya
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                Solusi Lengkap <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Pertanian Modern</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
                Menyediakan bibit unggul, pupuk berkualitas, hingga peralatan tani terlengkap. Bangun pertanian sukses bersama <strong>Kios Baha Tani</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-green-900/20 w-full sm:w-auto" onClick={() => document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' })}>
                    Belanja Sekarang
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white rounded-full px-8 h-14 text-lg backdrop-blur-sm w-full sm:w-auto" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                    Tentang Kami
                </Button>
            </div>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Kategori Produk</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Kami menyediakan berbagai kebutuhan pertanian terlengkap untuk hasil panen yang maksimal.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((cat) => (
                    <div 
                        key={cat.id} 
                        className={`p-6 rounded-xl border border-border/50 bg-card hover:bg-accent/50 transition-all cursor-pointer flex flex-col items-center justify-center gap-3 group ${selectedCategory === cat.id ? 'ring-2 ring-primary bg-accent/50' : ''}`}
                        onClick={() => {
                            setSelectedCategory(cat.id);
                            document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <div className="p-3 rounded-full bg-primary/10 group-hover:scale-110 transition-transform">
                            {cat.icon}
                        </div>
                        <span className="font-medium text-sm text-center">{cat.label}</span>
                    </div>
                ))}
            </div>
          </div>
      </section>

      {/* Catalog Section */}
      <section id="katalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-6">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Katalog Produk</h2>
                    <p className="text-muted-foreground">Temukan produk terbaik pilihan kami</p>
                </div>
                
                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full lg:w-auto">
                    <TabsList className="bg-background border p-1 rounded-full h-auto flex-wrap justify-center sm:justify-start">
                        <TabsTrigger value="all" className="rounded-full px-4 py-2">Semua</TabsTrigger>
                        {categories.map(cat => (
                             <TabsTrigger key={cat.id} value={cat.id} className="rounded-full px-4 py-2">{cat.label}</TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onViewDetail={setSelectedProduct} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 bg-background rounded-xl border border-dashed">
                    <Sprout className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-medium text-muted-foreground">Produk tidak ditemukan</h3>
                    <p className="text-sm text-muted-foreground mt-2">Coba ganti kata kunci pencarian atau kategori lain.</p>
                </div>
            )}
        </div>
      </section>

      {/* Features/About Section */}
      <section id="about" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-green-500/20 rounded-3xl blur-2xl opacity-50"></div>
                     <img 
                        src="/images/rice.png" 
                        alt="Tentang Kios Baha Tani" 
                        className="relative rounded-3xl shadow-2xl object-cover w-full aspect-[4/3]"
                    />
                </div>
                <div>
                    <Badge variant="secondary" className="mb-4 text-primary">Tentang Kami</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Mitra Terbaik Petani Indonesia</h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        Kios Baha Tani hadir sebagai solusi komprehensif bagi dunia pertanian lokal. Kami tidak hanya menjual produk, tetapi juga memberikan edukasi dan dukungan bagi para petani untuk mencapai kemandirian pangan.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <div className="bg-background p-2 rounded-lg shadow-sm">
                                <Leaf className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold">Bibit Berkualitas</h4>
                                <p className="text-sm text-muted-foreground">Jaminan varietas unggul dengan tingkat keberhasilan tumbuh tinggi.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-4">
                            <div className="bg-background p-2 rounded-lg shadow-sm">
                                <Hammer className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold">Peralatan Lengkap</h4>
                                <p className="text-sm text-muted-foreground">Menyediakan alat pertanian modern maupun tradisional.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-background p-2 rounded-lg shadow-sm">
                                <Building2 className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold">Konsultasi Gratis</h4>
                                <p className="text-sm text-muted-foreground">Tim ahli kami siap membantu permasalahan pertanian Anda.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Siap Meningkatkan Hasil Panen?</h2>
                <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg relative z-10">
                    Hubungi kami sekarang untuk pemesanan bibit, konsultasi lahan, atau kerjasama pengadaan pupuk dalam jumlah besar.
                </p>
                <Button size="lg" variant="secondary" className="font-bold text-primary hover:bg-white rounded-full px-8 h-12 relative z-10">
                    <Phone className="mr-2 h-4 w-4" /> Hubungi WhatsApp
                </Button>
            </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-slate-200 pt-16 pb-8">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-slate-800 pb-12">
                <div className="md:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        {/* <div className="bg-green-600 p-2 rounded-lg"> */}
                            <img src="/images/logo.png" alt="Logo" className="h-12 w-12 rounded-lg bg-white p-1 object-contain" />
                        {/* </div> */}
                        <span className="text-2xl font-bold text-white">Kios Baha Tani</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Mitra terpercaya Anda dalam budidaya pertanian. Mari hijaukan bumi dan sehatkan keluarga.
                    </p>
                </div>
                
                <div>
                    <h4 className="font-bold text-white mb-4">Navigasi</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><a href="/" onClick={(e) => scrollToSection(e, 'top')} className="hover:text-primary transition-colors">Beranda</a></li>
                        <li><a href="/katalog" onClick={(e) => scrollToSection(e, 'katalog')} className="hover:text-primary transition-colors">Katalog Produk</a></li>
                        <li><a href="/about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-primary transition-colors">Tentang Kami</a></li>
                        <li><a href="/contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-primary transition-colors">Hubungi Kami</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-4">Kontak</h4>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex items-center gap-3">
                            <Phone className="h-4 w-4 text-green-500" /> +62 812-3456-7890
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin className="h-4 w-4 text-green-500" /> Jl. Tani Makmur No. 88, Bogor, Jawa Barat
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold text-white mb-4">Ikuti Kami</h4>
                    <div className="flex gap-4">
                        <a href="#" className="bg-slate-900 av:bg-slate-800 p-2 rounded-full hover:bg-primary transition-colors hover:text-white group">
                            <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="bg-slate-900 av:bg-slate-800 p-2 rounded-full hover:bg-primary transition-colors hover:text-white group">
                            <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="bg-slate-900 av:bg-slate-800 p-2 rounded-full hover:bg-primary transition-colors hover:text-white group">
                            <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center text-slate-600 text-sm">
                &copy; {new Date().getFullYear()} Kios Baha Tani. All rights reserved.
            </div>
        </div>
      </footer>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-[800px] overflow-hidden p-0 gap-0 border-none shadow-2xl">
             {selectedProduct && (
                 <div className="flex flex-col md:flex-row h-full">
                     <div className="w-full md:w-1/2 relative bg-muted min-h-[300px]">
                         <img 
                            src={selectedProduct.image} 
                            alt={selectedProduct.name}
                            className="absolute inset-0 w-full h-full object-cover"
                         />
                         <div className="absolute top-4 left-4">
                             <Badge className="bg-background/80 backdrop-blur text-foreground border-none hover:bg-background/90">{selectedProduct.category}</Badge>
                         </div>
                     </div>
                     <div className="w-full md:w-1/2 p-8 flex flex-col bg-background">
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${selectedProduct.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {selectedProduct.stock > 0 ? `Tersedia: ${selectedProduct.stock}` : 'Stok Habis'}
                                </span>
                            </div>
                            <DialogTitle className="text-2xl font-bold mb-4">{selectedProduct.name}</DialogTitle>
                            <DialogDescription className="text-base mb-6 leading-relaxed">
                                {selectedProduct.description}
                            </DialogDescription>
                            
                            {selectedProduct.benefits && (
                                <div className="mb-6 bg-muted/50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                                        <Leaf className="h-4 w-4 text-primary" />
                                        Keunggulan Produk:
                                    </h4>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {selectedProduct.benefits.map((benefit, idx) => (
                                            <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 pt-6 border-t border-border">
                            <div className="flex items-end justify-between mb-4">
                                <span className="text-sm text-muted-foreground">Harga Resmi</span>
                                <span className="text-3xl font-bold text-primary">Rp {selectedProduct.price.toLocaleString("id-ID")}</span>
                            </div>
                            <Button className="w-full rounded-full h-12 text-base font-semibold shadow-lg shadow-primary/20" size="lg">
                                <Phone className="mr-2 h-4 w-4" /> Pesan via WhatsApp
                            </Button>
                        </div>
                     </div>
                 </div>
             )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
