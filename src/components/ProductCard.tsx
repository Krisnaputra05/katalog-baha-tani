import type { Product } from "@/data/plants";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onViewDetail: (product: Product) => void;
}

export function ProductCard({ product, onViewDetail }: ProductCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden group border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={`Jual ${product.name} - Kios Baha Tani`}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <Badge 
          className="absolute top-3 right-3 shadow-sm" 
          // variant={product.category === "Obat" ? "default" : "secondary"}
          // Simplified logic as Obat is removed
          variant="secondary"
        >
          {product.category}
        </Badge>
      </div>
      <CardHeader className="p-4 pb-2">
        <h3 className="text-lg font-semibold leading-none tracking-tight line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 h-10">
          {product.description}
        </p>
      </CardHeader>
      <CardFooter className="p-4 pt-0 flex items-center justify-between mt-auto">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">Harga</span>
          <span className="font-bold text-lg text-primary">
            Rp {product.price.toLocaleString("id-ID")}
          </span>
        </div>
        <Button size="sm" onClick={() => onViewDetail(product)} className="gap-2">
          <Eye size={16} /> Detail
        </Button>
      </CardFooter>
    </Card>
  );
}
