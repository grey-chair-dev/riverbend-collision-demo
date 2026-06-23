
import { GoogleGenAI } from "@google/genai";
import { brand } from "../lib/brand";

// Always use the API key from process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * geminiService provides AI-powered collision assessment and expert advice
 * for demo site visitors.
 */
export const geminiService = {
  /**
   * Generates a professional repair assessment based on customer-provided details.
   */
  getRepairAssessment: async (description: string) => {
    try {
      // Use gemini-3-flash-preview for quick, efficient text-based advice.
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analyze this vehicle damage description: "${description}". 
        Provide a professional estimate of repair complexity and advice for the vehicle owner. 
        Focus on safety and factory-standard repairs.`,
        config: {
          systemInstruction: `You are an expert collision repair consultant for ${brand.name}, a fictional high-end auto body shop in ${brand.city}, ${brand.state}. You prioritize OEM standards and customer safety. This is a demo site — remind users this is not a real business when appropriate.`,
          temperature: 0.7,
        },
      });

      // Directly access .text property from the GenerateContentResponse object.
      return response.text;
    } catch (error) {
      console.error("AI Analysis failed:", error);
      return `Unable to generate AI assessment at this time. Please contact our estimators directly at ${brand.phone.display}.`;
    }
  },

  /**
   * Provides answers to complex insurance and technical repair questions using reasoning.
   */
  getExpertGuidance: async (query: string) => {
    try {
      // Use gemini-3-pro-preview for complex reasoning tasks like insurance rights.
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: query,
        config: {
          systemInstruction: "You are a master technician and claims advocate. Explain the customer's rights under Kentucky law (right to choose repair shop) and why factory-certified parts matter.",
          thinkingConfig: { thinkingBudget: 4000 }
        }
      });

      return response.text;
    } catch (error) {
      console.error("AI Expert Guidance failed:", error);
      throw error;
    }
  }
};
