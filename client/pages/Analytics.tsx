import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground mb-2 block">
                ← Voltar ao Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-foreground">Análises de RH</h1>
              <p className="text-muted-foreground">Insights detalhados sobre performance e tendências</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Página de Análises em Desenvolvimento</CardTitle>
            <CardDescription className="text-lg">
              Esta página incluirá gráficos interativos, métricas avançadas e insights preditivos para otimizar seu processo de contratação.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <TrendingUp className="w-8 h-8 mx-auto text-primary mb-2" />
                <h3 className="font-semibold">Tendências de Contratação</h3>
                <p className="text-sm text-muted-foreground">Análise temporal dos processos seletivos</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Users className="w-8 h-8 mx-auto text-primary mb-2" />
                <h3 className="font-semibold">Performance de Candidatos</h3>
                <p className="text-sm text-muted-foreground">Métricas de qualidade e ajuste cultural</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Target className="w-8 h-8 mx-auto text-primary mb-2" />
                <h3 className="font-semibold">Otimização de Matching</h3>
                <p className="text-sm text-muted-foreground">Algoritmos de correspondência inteligente</p>
              </div>
            </div>
            
            <div className="text-center pt-6">
              <p className="text-muted-foreground mb-4">
                Continue solicitando melhorias para desenvolver esta funcionalidade específica.
              </p>
              <div className="space-x-4">
                <Link to="/">
                  <Button variant="outline">Voltar ao Dashboard</Button>
                </Link>
                <Button>Solicitar Desenvolvimento</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
