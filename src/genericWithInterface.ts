interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: number;
  };
  smartWatch: T;
  bike?: X;
}

interface BrandCharaWatch {
  heartRate: string;
  stopWatch: boolean;
}

// const poorDeveloper: Developer<{
//   heartRate: string;
//   stopWatch: boolean;
// }>
const poorDeveloper: Developer<
  BrandCharaWatch,
  {
    brand: string;
    engineCapacity: string;
  }
> = {
  name: "Mr Poor",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A211",
    releasedYear: 2010,
  },
  smartWatch: {
    heartRate: "200",
    stopWatch: true,
  },
  bike: {
    brand: "Yamaha",
    engineCapacity: "100cc",
  },
};

interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AiFeature: boolean;
}

const richDeveloper: Developer<AppleWatch> = {
  name: "Mr Rich",
  salary: 100,
  device: {
    brand: "Apple",
    model: "A211",
    releasedYear: 2010,
  },
  smartWatch: {
    heartRate: "200",
    callSupport: true,
    calculator: true,
    AiFeature: true,
  },
};
