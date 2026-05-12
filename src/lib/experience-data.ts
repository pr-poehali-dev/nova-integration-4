export interface Experience {
  id: string
  title: string
  company: string
  location: {
    city: string
    country: string
    lat: number
    lng: number
    isRemote: boolean
  }
  startDate: string
  endDate: string
  color: "pink" | "yellow" | "green" | "blue"
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Молодёжное добровольчество",
    company: "Программа «Достигай»",
    location: {
      city: "Москва",
      country: "Россия",
      lat: 55.7558,
      lng: 37.6176,
      isRemote: false,
    },
    startDate: "2020-01-15",
    endDate: "2024-12-27",
    color: "green",
  },
  {
    id: "2",
    title: "Социальная поддержка населения",
    company: "Региональная инициатива",
    location: {
      city: "Санкт-Петербург",
      country: "Россия",
      lat: 59.9311,
      lng: 30.3609,
      isRemote: false,
    },
    startDate: "2020-06-20",
    endDate: "2024-12-27",
    color: "green",
  },
  {
    id: "3",
    title: "Развитие гражданского общества",
    company: "Партнёрская программа",
    location: {
      city: "Екатеринбург",
      country: "Россия",
      lat: 56.8519,
      lng: 60.6122,
      isRemote: false,
    },
    startDate: "2021-03-10",
    endDate: "2024-12-27",
    color: "blue",
  },
  {
    id: "4",
    title: "Поддержка НКО-сектора",
    company: "Ситис — Сибирь",
    location: {
      city: "Новосибирск",
      country: "Россия",
      lat: 54.9885,
      lng: 82.9207,
      isRemote: false,
    },
    startDate: "2021-09-05",
    endDate: "2024-12-27",
    color: "pink",
  },
  {
    id: "5",
    title: "Образовательные инициативы",
    company: "Программа развития",
    location: {
      city: "Казань",
      country: "Россия",
      lat: 55.7887,
      lng: 49.1221,
      isRemote: false,
    },
    startDate: "2022-02-18",
    endDate: "2024-12-27",
    color: "yellow",
  },
]
