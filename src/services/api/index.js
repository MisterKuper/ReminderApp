import { createClient } from "@supabase/supabase-js";
import { env } from "../environment";

const { supabaseUrl, supabaseKey } = env;
export const api = createClient(supabaseUrl, supabaseKey);
