import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  Users, 
  TrendingUp, 
  Target, 
  BarChart3, 
  UserCheck, 
  Filter,
  Star,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Candidate {
  id: string;
  name: string;
  role: string;
  location: string;
  experience: string;
  skills: string[];
  matchScore: number;
  avatar: string;
  status: 'available' | 'interviewing' | 'hired';
  education: string;
  salaryExpectation: string;
}

const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'Ana Silva',
    role: 'Desenvolvedora Frontend',
    location: 'São Paulo, SP',
    experience: '5 anos',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    matchScore: 95,
    avatar: '',
    status: 'available',
    education: 'Ciência da Computação - USP',
    salaryExpectation: 'R$ 8.000 - R$ 12.000'
  },
  {
    id: '2',
    name: 'Carlos Santos',
    role: 'Engenheiro de Software',
    location: 'Rio de Janeiro, RJ',
    experience: '7 anos',
    skills: ['Node.js', 'Python', 'AWS', 'Docker'],
    matchScore: 88,
    avatar: '',
    status: 'interviewing',
    education: 'Engenharia de Software - PUC-RJ',
    salaryExpectation: 'R$ 10.000 - R$ 15.000'
  },
  {
    id: '3',
    name: 'Maria Costa',
    role: 'UX Designer',
    location: 'Belo Horizonte, MG',
    experience: '4 anos',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    matchScore: 92,
    avatar: '',
    status: 'available',
    education: 'Design Gráfico - UFMG',
    salaryExpectation: 'R$ 6.000 - R$ 9.000'
  },
  {
    id: '4',
    name: 'João Oliveira',
    role: 'Data Scientist',
    location: 'Porto Alegre, RS',
    experience: '6 anos',
    skills: ['Python', 'Machine Learning', 'SQL', 'Tableau'],
    matchScore: 85,
    avatar: '',
    status: 'available',
    education: 'Estatística - UFRGS',
    salaryExpectation: 'R$ 9.000 - R$ 13.000'
  }
];

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('overview');

  const filteredCandidates = mockCandidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'interviewing': return 'bg-yellow-100 text-yellow-800';
      case 'hired': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Disponível';
      case 'interviewing': return 'Em processo';
      case 'hired': return 'Contratado';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">HR Analytics Platform</h1>
              <p className="text-muted-foreground">Análise inteligente de perfis e matching de candidatos</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
              <Button size="sm">
                <Users className="w-4 h-4 mr-2" />
                Nova Vaga
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="candidates">Candidatos</TabsTrigger>
            <TabsTrigger value="analytics">Análises</TabsTrigger>
            <TabsTrigger value="reports">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total de Candidatos</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-muted-foreground">+12% do mês passado</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Taxa de Match</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">87%</div>
                  <p className="text-xs text-muted-foreground">+5% do mês passado</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Posições Abertas</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">3 novas esta semana</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Contratações</CardTitle>
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18</div>
                  <p className="text-xs text-muted-foreground">Neste mês</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ações Rápidas</CardTitle>
                  <CardDescription>Acesse rapidamente as funcionalidades principais</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <Link to="/analytics">
                    <Button variant="outline" className="w-full h-20 flex flex-col">
                      <BarChart3 className="w-8 h-8 mb-2" />
                      Análises
                    </Button>
                  </Link>
                  <Link to="/candidates">
                    <Button variant="outline" className="w-full h-20 flex flex-col">
                      <Users className="w-8 h-8 mb-2" />
                      Candidatos
                    </Button>
                  </Link>
                  <Link to="/reports">
                    <Button variant="outline" className="w-full h-20 flex flex-col">
                      <TrendingUp className="w-8 h-8 mb-2" />
                      Relatórios
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full h-20 flex flex-col">
                    <Calendar className="w-8 h-8 mb-2" />
                    Agenda
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Matches Hoje</CardTitle>
                  <CardDescription>Candidatos com melhor compatibilidade</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockCandidates.slice(0, 3).map((candidate) => (
                      <div key={candidate.id} className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={candidate.avatar} />
                          <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">{candidate.name}</p>
                          <p className="text-xs text-muted-foreground">{candidate.role}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium ml-1">{candidate.matchScore}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="candidates" className="space-y-6">
            {/* Search Bar */}
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Buscar candidatos por nome, cargo ou habilidades..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtros Avançados
              </Button>
            </div>

            {/* Candidates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCandidates.map((candidate) => (
                <Card key={candidate.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={candidate.avatar} />
                          <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{candidate.name}</CardTitle>
                          <CardDescription>{candidate.role}</CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(candidate.status)}>
                        {getStatusText(candidate.status)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Match Score</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={candidate.matchScore} className="w-20" />
                        <span className="text-sm font-medium">{candidate.matchScore}%</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {candidate.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {candidate.experience} de experiência
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        {candidate.education}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2">Habilidades:</p>
                      <div className="flex flex-wrap gap-1">
                        {candidate.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex space-x-2">
                      <Button size="sm" className="flex-1">Ver Perfil</Button>
                      <Button size="sm" variant="outline">Contatar</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Análises de RH</CardTitle>
                <CardDescription>Insights detalhados sobre contratações e performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Análises Detalhadas</h3>
                  <p className="text-muted-foreground mb-4">
                    Esta seção incluirá gráficos interativos, métricas de performance e insights preditivos.
                  </p>
                  <Button>Explorar Análises</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Relatórios</CardTitle>
                <CardDescription>Gere relatórios personalizados sobre contratações e candidatos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <TrendingUp className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Relatórios Personalizados</h3>
                  <p className="text-muted-foreground mb-4">
                    Crie relatórios detalhados com dados de contratação, tempo médio de preenchimento de vagas e análise de ROI.
                  </p>
                  <Button>Criar Relatório</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
