'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, Trash2 } from 'lucide-react'

export default function CreateQuestionnaire() {
   const [formData, setFormData] = useState({
      title: '',
      description: '',
      category: '',
      difficulty: '',
      isPublic: 'false',
      questions: [{ text: '', type: 'text', options: [''] }]
   })

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData(prev => ({ ...prev, [name]: value }))
   }

   const handleSelectChange = (name: string) => (value: string) => {
      setFormData(prev => ({ ...prev, [name]: value }))
   }

   const handleQuestionChange = (index: number, field: string, value: string) => {
      const newQuestions = [...formData.questions]
      newQuestions[index] = { ...newQuestions[index], [field]: value }
      setFormData(prev => ({ ...prev, questions: newQuestions }))
   }

   const handleOptionChange = (questionIndex: number, optionIndex: number, value: string) => {
      const newQuestions = [...formData.questions]
      newQuestions[questionIndex].options[optionIndex] = value
      setFormData(prev => ({ ...prev, questions: newQuestions }))
   }

   const addQuestion = () => {
      setFormData(prev => ({
         ...prev,
         questions: [...prev.questions, { text: '', type: 'text', options: [''] }]
      }))
   }

   const removeQuestion = (index: number) => {
      const newQuestions = formData.questions.filter((_, i) => i !== index)
      setFormData(prev => ({ ...prev, questions: newQuestions }))
   }

   const addOption = (questionIndex: number) => {
      const newQuestions = [...formData.questions]
      newQuestions[questionIndex].options.push('')
      setFormData(prev => ({ ...prev, questions: newQuestions }))
   }

   const removeOption = (questionIndex: number, optionIndex: number) => {
      const newQuestions = [...formData.questions]
      newQuestions[questionIndex].options = newQuestions[questionIndex].options.filter((_, i) => i !== optionIndex)
      setFormData(prev => ({ ...prev, questions: newQuestions }))
   }

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log('Form data submitted:', formData)
      // Here you would typically send the data to your backend
   }

   return (
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
         <Card>
            <CardHeader>
               <CardTitle className="text-2xl font-bold">Criar Novo Questionário</CardTitle>
               <CardDescription>Preencha os detalhes do questionário e adicione as perguntas</CardDescription>
            </CardHeader>
            <CardContent>
               <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                     <div>
                        <Label htmlFor="title">Título</Label>
                        <Input
                           id="title"
                           name="title"
                           value={formData.title}
                           onChange={handleInputChange}
                           className="w-full"
                        />
                     </div>
                     <div>
                        <Label htmlFor="description">Descrição</Label>
                        <Textarea
                           id="description"
                           name="description"
                           value={formData.description}
                           onChange={handleInputChange}
                           className="w-full"
                        />
                     </div>
                     <div className="">
                        <div>
                           <Label htmlFor="category">Categoria</Label>
                           <Select
                              onValueChange={handleSelectChange('category')}
                              defaultValue={formData.category}
                           >
                              <SelectTrigger>
                                 <SelectValue placeholder="Selecione uma categoria" />
                              </SelectTrigger>
                              <SelectContent>
                                 <SelectItem value="environment">Ficha de campo</SelectItem>
                                 <SelectItem value="sustainability">Ficha de condutores</SelectItem>
                                 <SelectItem value="ecology">Agendamento de visitas</SelectItem>
                              </SelectContent>
                           </Select>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <Label>Perguntas</Label>
                        {formData.questions.map((question, questionIndex) => (
                           <Card key={questionIndex}>
                              <CardContent className="space-y-4 pt-4">
                                 <div className="flex items-center justify-between">
                                    <Label htmlFor={`question-${questionIndex}`}>Pergunta {questionIndex + 1}</Label>
                                    <Button
                                       type="button"
                                       variant="outline"
                                       size="icon"
                                       onClick={() => removeQuestion(questionIndex)}
                                    >
                                       <Trash2 className="h-4 w-4" />
                                    </Button>
                                 </div>
                                 <Input
                                    id={`question-${questionIndex}`}
                                    value={question.text}
                                    onChange={(e) => handleQuestionChange(questionIndex, 'text', e.target.value)}
                                    placeholder="Digite a pergunta"
                                 />
                                 <Select
                                    onValueChange={(value) => handleQuestionChange(questionIndex, 'type', value)}
                                    defaultValue={question.type}
                                 >
                                    <SelectTrigger>
                                       <SelectValue placeholder="Tipo de resposta" />
                                    </SelectTrigger>
                                    <SelectContent>
                                       <SelectItem value="text">Texto</SelectItem>
                                       <SelectItem value="radio">Múltipla escolha (uma resposta)</SelectItem>
                                       <SelectItem value="checkbox">Múltipla escolha (várias respostas)</SelectItem>
                                    </SelectContent>
                                 </Select>
                                 {(question.type === 'radio' || question.type === 'checkbox') && (
                                    <div className="space-y-2">
                                       {question.options.map((option, optionIndex) => (
                                          <div key={optionIndex} className="flex items-center space-x-2">
                                             <Input
                                                value={option}
                                                onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                                                placeholder={`Opção ${optionIndex + 1}`}
                                             />
                                             <Button
                                                type="button"
                                                variant="outline"
                                                size="icon"
                                                onClick={() => removeOption(questionIndex, optionIndex)}
                                             >
                                                <Trash2 className="h-4 w-4" />
                                             </Button>
                                          </div>
                                       ))}
                                       <Button
                                          type="button"
                                          variant="outline"
                                          size="sm"
                                          onClick={() => addOption(questionIndex)}
                                       >
                                          Adicionar Opção
                                       </Button>
                                    </div>
                                 )}
                              </CardContent>
                           </Card>
                        ))}
                        <Button
                           type="button"
                           variant="outline"
                           onClick={addQuestion}
                           className="w-full"
                        >
                           <PlusCircle className="mr-2 h-4 w-4" />
                           Adicionar Pergunta
                        </Button>
                     </div>
                  </div>
               </form>
            </CardContent>
            <CardFooter>
               <Button type="submit" onClick={handleSubmit} className="w-full">Criar Questionário</Button>
            </CardFooter>
         </Card>
      </div>
   )
}  