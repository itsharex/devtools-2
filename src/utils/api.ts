import { invoke } from '@tauri-apps/api/core'

export interface JsonToGoOptions {
  struct_name: string
  exported_fields: boolean
  is_go_118_or_above: boolean
  is_go_124_or_above: boolean
  selected_tags: Record<string, boolean>
}

export async function convertJsonToGo(
  json: string,
  options: JsonToGoOptions,
): Promise<string> {
  return await invoke<string>('convert_json_to_go', {
    jsonStr: json,
    options,
  })
}

export interface DnsRecord {
  recordType: string
  name: string
  value: string
  ttl?: number
}

export interface IpGeolocationInfo {
  ip: string
  country?: string
  city?: string
  org?: string
  region?: string
  timezone?: string
  source: string
}

export interface DnsLookupResponse {
  domain: string
  records: DnsRecord[]
  ipInfo?: IpGeolocationInfo
  error?: string
}

export interface ReverseDnsResponse {
  ip: string
  domains: string[]
  error?: string
}

export interface BatchReverseDnsResponse {
  results: ReverseDnsResponse[]
  error?: string
}

export async function lookupDns(
  domain: string,
  dnsServer: string | undefined,
  recordType: string,
): Promise<DnsLookupResponse> {
  return await invoke<DnsLookupResponse>('lookup_dns', {
    domain,
    dnsServer,
    recordType,
  })
}

export async function reverseDnsLookup(ip: string): Promise<ReverseDnsResponse> {
  return await invoke<ReverseDnsResponse>('reverse_dns_lookup', {
    ip,
  })
}

export async function batchReverseDnsLookup(
  ips: string[],
): Promise<BatchReverseDnsResponse> {
  return await invoke<BatchReverseDnsResponse>('batch_reverse_dns_lookup', {
    ips,
  })
}

export async function getDnsServers(): Promise<Record<string, string>> {
  return await invoke<Record<string, string>>('get_dns_servers')
}
