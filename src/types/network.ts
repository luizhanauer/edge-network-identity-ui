export interface NetworkProfile {
  ip: string;
  provider: {
    isp: string;
    asn: number;
  };
  location: {
    city: string;
    region: string;
    country: string;
    postalCode: string;
    latitude: string;
    longitude: string;
    timezone: string;
  };
  connection: {
    datacenter: string;
    latencyMs: number;
    protocol: string;
    tlsVersion: string;
  };
  client: {
    userAgent: string;
    platform: string;
  };
}