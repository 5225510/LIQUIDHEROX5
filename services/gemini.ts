import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMarketInsights = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the LIQUIDHEROX Trading Assistant. Provide a concise, professional analysis for: ${query}. 
      Focus on CFD trading perspectives. Keep it under 150 words. Mention that LIQUIDHEROX offers tight spreads for these assets.`,
      config: {
        systemInstruction: "You are a world-class financial analyst and trading bot assistant. You represent LIQUIDHEROX. You are helpful, professional, and focus on market liquidity, spreads, and execution speed."
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently unable to fetch real-time insights. Please try again later.";
  }
};