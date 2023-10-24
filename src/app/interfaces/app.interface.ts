export interface ApiResponse {
  get?: string;
  parameters?: {
  },
  results?: number;
  paging?: {
  }
  errors?: {
    time?: string;
    bug?: string;
    report?: string;
  };
  message?: string;
  response?: Array<{
    fixture?: Fixture;
    league?: League;
    teams?: { home: Team; away: Team };
    goals?: { home: number; away: number };
    score?: {};
  }>;
}
export interface ResponseData {
  fixture?: Fixture;
  league?: League;
  teams?: { home: Team; away: Team };
  goals?: { home: number; away: number };
  score?: {};
}

export interface Fixture {
  id?: number;
  referee?: string;
  timezone?: string;
  date?: string;
  timestamp?: number;
  status?: { short?: string, long?: string, elapsed?: number };
  periods?: {};
  venue?: {};
}
export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string | null;
  season: number;
  standings?: [Standings[]];
  round?: string;
}
export interface Standings {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string | null;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
  home?: {
  }
  away?: {
  }
  update?: string;
}
export interface Team {
  id: number;
  name: string;
  logo: string;
  winner?: boolean;
}
