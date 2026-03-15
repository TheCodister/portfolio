import { useQuery } from "@tanstack/react-query";
import type { PortfolioData } from "@/types/portfolio";

export function usePortfolio() {
  return useQuery<PortfolioData>({
    queryKey: ["portfolio"],
    queryFn: async () => {
      const res = await fetch("/portfolio.json");
      if (!res.ok) throw new Error("Failed to load portfolio data");
      return res.json();
    },
  });
}
