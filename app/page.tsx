'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [crimes, setCrimes] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    let tempo = 0;
    let multa = 0;

    const linhas = crimes.split("\n");
    linhas.forEach((linha) => {
      const [nome, t, m] = linha.split(",");
      tempo += parseInt(t) || 0;
      multa += parseInt(m) || 0;
    });

    setResultado(`Tempo: ${tempo} meses | Multa: R$ ${multa.toLocaleString()}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-xl shadow-2xl rounded-2xl">
        <CardContent className="space-y-4 p-6">
          <h1 className="text-2xl font-bold text-center">Calculadora Penal GTA RP</h1>
          <p className="text-sm text-gray-600 text-center">
            Digite os crimes no formato: Nome,Tempo,Multa por linha.
          </p>
          <textarea
            value={crimes}
            onChange={(e) => setCrimes(e.target.value)}
            rows={8}
            className="w-full p-2 border rounded-md"
            placeholder="Ex: Roubo,10,5000\nHomicídio,25,10000"
          />
          <Button onClick={calcular} className="w-full">
            Calcular
          </Button>
          {resultado && (
            <div className="mt-4 text-center font-semibold text-green-700">
              {resultado}
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}